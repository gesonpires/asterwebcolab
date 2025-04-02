'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface PhysicsSimulationProps {
  width?: number;
  height?: number;
  initialVelocity?: number;
  initialAngle?: number;
  gravity?: number;
}

export default function PhysicsSimulation({
  width = 800,
  height = 400,
  initialVelocity = 50,
  initialAngle = 45,
  gravity = 9.81,
}: PhysicsSimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [trajectory, setTrajectory] = useState<Array<{ x: number; y: number }>>([]);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  // Calculate initial velocity components
  const vx = initialVelocity * Math.cos((initialAngle * Math.PI) / 180);
  const vy = initialVelocity * Math.sin((initialAngle * Math.PI) / 180);

  // Calculate trajectory
  const calculateTrajectory = () => {
    const points: Array<{ x: number; y: number }> = [];
    const maxTime = (2 * vy) / gravity;
    const timeStep = maxTime / 100;

    for (let t = 0; t <= maxTime; t += timeStep) {
      const x = vx * t;
      const y = vy * t - (0.5 * gravity * t * t);
      if (y >= 0) {
        points.push({ x, y });
      }
    }

    return points;
  };

  // Initialize simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Calculate initial trajectory
    const initialTrajectory = calculateTrajectory();
    setTrajectory(initialTrajectory);
    setCurrentPosition(initialTrajectory[0]);

    // Draw initial state
    draw(ctx, initialTrajectory, initialTrajectory[0]);
  }, [width, height, initialVelocity, initialAngle, gravity]);

  // Draw function
  const draw = (
    ctx: CanvasRenderingContext2D,
    trajectory: Array<{ x: number; y: number }>,
    currentPos: { x: number; y: number }
  ) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw ground
    ctx.fillStyle = '#4B5563';
    ctx.fillRect(0, height - 20, width, 20);

    // Draw trajectory
    if (trajectory.length > 1) {
      ctx.beginPath();
      ctx.moveTo(trajectory[0].x, height - trajectory[0].y - 20);
      trajectory.forEach((point) => {
        ctx.lineTo(point.x, height - point.y - 20);
      });
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Draw projectile
    ctx.beginPath();
    ctx.arc(currentPos.x, height - currentPos.y - 20, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#EF4444';
    ctx.fill();
  };

  // Animation loop
  useEffect(() => {
    if (!isRunning) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animationFrame = requestAnimationFrame(() => {
      const newTime = time + 0.016; // Approximately 60fps
      setTime(newTime);

      const index = Math.min(Math.floor((newTime / (2 * vy / gravity)) * trajectory.length), trajectory.length - 1);
      const newPosition = trajectory[index];
      setCurrentPosition(newPosition);

      draw(ctx, trajectory, newPosition);

      if (newPosition.x < trajectory[trajectory.length - 1].x) {
        requestAnimationFrame(animationFrame);
      } else {
        setIsRunning(false);
      }
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [isRunning, time, trajectory, vy, gravity]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="border border-gray-300 dark:border-gray-700 rounded-lg"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="absolute bottom-4 left-4 flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isRunning ? 'Pausar' : 'Iniciar'}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setTime(0);
            setCurrentPosition(trajectory[0]);
            setIsRunning(false);
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            draw(ctx, trajectory, trajectory[0]);
          }}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Reiniciar
        </motion.button>
      </div>
    </div>
  );
} 