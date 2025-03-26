'use client';

import { useParams } from 'next/navigation';
import { topics } from '../../data/topics';
import ContentViewer from '../../components/ContentViewer';
import { notFound } from 'next/navigation';

const TeacherTopicPage = () => {
  const params = useParams();
  const topicId = params.topicId as string;
  
  const topic = topics.find(t => t.id === topicId);
  
  if (!topic) {
    notFound();
  }

  const handleProgress = (sectionId: string, progress: number) => {
    // In a real app, this would update the progress in a database
    console.log(`Section ${sectionId} progress: ${progress}%`);
  };

  return (
    <ContentViewer
      sections={topic.sections}
      onProgress={handleProgress}
      isTeacher={true}
    />
  );
};

export default TeacherTopicPage; 