'use client';

import { useState } from 'react';
import PhysicsSimulation from '../PhysicsSimulation';

export default function ProjectileMotionSimulation() {
  const [velocity, setVelocity] = useState(50);
  const [angle, setAngle] = useState(45);
  const [gravity, setGravity] = useState(9.81);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Simulação de Movimento de Projétil
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Explore o movimento de projétil em detalhes. Observe a trajetória,
          velocidade e aceleração do objeto em diferentes condições.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Velocidade Inicial (m/s)
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={velocity}
              onChange={(e) => setVelocity(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {velocity} m/s
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ângulo (graus)
            </label>
            <input
              type="range"
              min="0"
              max="90"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {angle}°
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Gravidade (m/s²)
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={gravity}
              onChange={(e) => setGravity(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {gravity} m/s²
            </div>
          </div>
        </div>

        <div className="mt-8">
          <PhysicsSimulation
            width={800}
            height={400}
            initialVelocity={velocity}
            initialAngle={angle}
            gravity={gravity}
          />
        </div>
      </div>
    </div>
  );
} 