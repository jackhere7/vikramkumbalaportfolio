import { Leaf } from "lucide-react";
import { useEffect, useState } from "react";

interface LeafData {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  color: string;
}

const leafColors = [
  "text-primary",
  "text-primary/80",
  "text-primary/60",
  "text-[hsl(120_50%_45%)]",
  "text-[hsl(140_55%_40%)]",
  "text-[hsl(80_45%_50%)]",
];

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState<LeafData[]>([]);
  const [showLeaves, setShowLeaves] = useState(true);

  useEffect(() => {
    // Generate leaves
    const generatedLeaves: LeafData[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 16,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
    }));
    setLeaves(generatedLeaves);

    // Hide leaves after 15 seconds for better UX
    const timeout = setTimeout(() => {
      setShowLeaves(false);
    }, 15000);

    return () => clearTimeout(timeout);
  }, []);

  if (!showLeaves) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`falling-leaf ${leaf.color}`}
          style={{
            left: `${leaf.left}%`,
            '--fall-duration': `${leaf.duration}s`,
            '--fall-delay': `${leaf.delay}s`,
            '--start-rotation': `${leaf.rotation}deg`,
          } as React.CSSProperties}
        >
          <Leaf
            style={{
              width: leaf.size,
              height: leaf.size,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;