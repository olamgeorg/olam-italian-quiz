// george.edu Italian Syllabus Quiz - Web Audio API synthesizer for instant responsive feedback
let audioCtx: AudioContext | null = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

export const playSound = (type: 'correct' | 'incorrect' | 'click') => {
  try {
    initAudio();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;

    if (type === 'click') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'correct') {
      // Warm, cheerful major triad chord (C5 then E5 then G5 in rapid successions)
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(audioCtx.destination);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now); // C5
      
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(659.25, now + 0.08); // E5

      osc1.start(now);
      osc1.stop(now + 0.45);

      osc2.start(now + 0.08);
      osc2.stop(now + 0.45);
    } else if (type === 'incorrect') {
      // Calm, soft buzz (220Hz down to 140Hz)
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.linearRampToValueAtTime(140, now + 0.35);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      osc.start(now);
      osc.stop(now + 0.35);
    }
  } catch (e) {
    console.warn("Web Audio Context could not start or render:", e);
  }
};
