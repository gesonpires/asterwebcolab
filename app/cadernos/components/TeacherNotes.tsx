'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

interface TeacherNotesProps {
  topicId: string;
  initialNotes?: Note[];
  onSave?: (note: Note) => void;
  onDelete?: (noteId: string) => void;
}

const TeacherNotes = ({ topicId, initialNotes = [], onSave, onDelete }: TeacherNotesProps) => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [newNote, setNewNote] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // In a real app, this would be fetched from a database
  const availableTags = Array.from(
    new Set(notes.flatMap(note => note.tags))
  ).sort();

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 ||
                       selectedTags.every(tag => note.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const handleCreateNote = () => {
    const newNoteData: Note = {
      id: Date.now().toString(),
      title: '',
      content: '',
      tags: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setEditingNote(newNoteData);
    setNewNote(true);
  };

  const handleSaveNote = () => {
    if (!editingNote) return;

    const now = new Date().toISOString();
    const updatedNote = {
      ...editingNote,
      updatedAt: now
    };

    if (newNote) {
      setNotes(prev => [...prev, updatedNote]);
    } else {
      setNotes(prev =>
        prev.map(note =>
          note.id === updatedNote.id ? updatedNote : note
        )
      );
    }

    onSave?.(updatedNote);
    setEditingNote(null);
    setNewNote(false);
  };

  const handleDeleteNote = (noteId: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta nota?')) {
      setNotes(prev => prev.filter(note => note.id !== noteId));
      onDelete?.(noteId);
    }
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Notas do Professor
          </h3>
          <button
            onClick={handleCreateNote}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Nova Nota
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Buscar notas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex flex-wrap gap-2">
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {editingNote ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
        >
          <input
            type="text"
            placeholder="Título da nota"
            value={editingNote.title}
            onChange={(e) => setEditingNote(prev => prev ? { ...prev, title: e.target.value } : null)}
            className="w-full px-4 py-2 mb-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Conteúdo da nota..."
            value={editingNote.content}
            onChange={(e) => setEditingNote(prev => prev ? { ...prev, content: e.target.value } : null)}
            className="w-full h-48 px-4 py-2 mb-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <input
            type="text"
            placeholder="Tags (separadas por vírgula)"
            value={editingNote.tags.join(', ')}
            onChange={(e) => setEditingNote(prev => prev ? {
              ...prev,
              tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean)
            } : null)}
            className="w-full px-4 py-2 mb-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                setEditingNote(null);
                setNewNote(false);
              }}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSaveNote}
              disabled={!editingNote.title || !editingNote.content}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              Salvar
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {filteredNotes.map(note => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  {note.title}
                </h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingNote(note)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    🗑️
                  </button>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-wrap">
                {note.content}
              </p>

              <div className="flex flex-wrap gap-2 mb-2">
                {note.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400">
                Criado em {formatDate(note.createdAt)}
                {note.updatedAt !== note.createdAt && (
                  <> • Atualizado em {formatDate(note.updatedAt)}</>
                )}
              </div>
            </motion.div>
          ))}

          {filteredNotes.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              {searchTerm || selectedTags.length > 0
                ? 'Nenhuma nota encontrada com os filtros selecionados.'
                : 'Nenhuma nota criada ainda.'}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TeacherNotes; 