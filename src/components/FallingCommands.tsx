import { useEffect, useRef } from "react";

const commands = [
  "nmap -sV",
  "sudo su",
  "hydra -l admin",
  "msfconsole",
  "tcpdump -i eth0",
  "wireshark",
  "nikto -h",
  "sqlmap -u",
  "john --wordlist",
  "aircrack-ng",
  "netcat -lvp",
  "gobuster dir",
  "enum4linux",
  "searchsploit",
  "hashcat -m",
  "steghide extract",
  "curl -X POST",
  "ssh root@",
  "chmod +x",
  "./exploit.sh",
  "cat /etc/passwd",
  "find / -perm",
  "grep -r 'password'",
  "base64 -d",
  "python exploit.py",
];

interface CommandParticle {
  x: number;
  y: number;
  speed: number;
  text: string;
  opacity: number;
  color: string;
}

export const FallingCommands = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: CommandParticle[] = [];
    const particleCount = 15;
    const colors = [
      "147, 51, 234",  // purple
      "34, 197, 94",   // green
      "239, 68, 68",   // red
      "59, 130, 246",  // blue
    ];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        speed: 0.3 + Math.random() * 0.5,
        text: commands[Math.floor(Math.random() * commands.length)],
        opacity: 0.3 + Math.random() * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.y += particle.speed;

        // Reset particle when it goes off screen
        if (particle.y > canvas.height) {
          particle.y = -50;
          particle.x = Math.random() * canvas.width;
          particle.text = commands[Math.floor(Math.random() * commands.length)];
          particle.color = colors[Math.floor(Math.random() * colors.length)];
        }

        // Draw command
        ctx.font = "14px 'JetBrains Mono', monospace";
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.fillText(particle.text, particle.x, particle.y);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 0 }}
    />
  );
};
