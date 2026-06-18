/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

let isMutedGlobal = false;
let audioCtx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  // Try to resume if browser autoplay policy suspended it
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export const playCorrectTone = () => {
  if (isMutedGlobal) return;
  const ctx = getContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    // A premium, clear tri-tone Major Chord: C5 (523Hz), E5 (659Hz), G5 (784Hz) with robust volume
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const gain2 = ctx.createGain();
    const gain3 = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(659.25, now + 0.06);

    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(783.99, now + 0.12);

    // Boosted volume for optimal auditory clarity (0.18-0.20 range)
    gain1.gain.setValueAtTime(0.18, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    gain2.gain.setValueAtTime(0.0, now);
    gain2.gain.setValueAtTime(0.16, now + 0.06);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    gain3.gain.setValueAtTime(0.0, now);
    gain3.gain.setValueAtTime(0.15, now + 0.12);
    gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc3.connect(gain3);
    gain3.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.4);

    osc2.start(now + 0.06);
    osc2.stop(now + 0.5);

    osc3.start(now + 0.12);
    osc3.stop(now + 0.6);
  } catch (error) {
    console.warn('Audio play failed', error);
  }
};

export const playIncorrectTone = () => {
  if (isMutedGlobal) return;
  const ctx = getContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    // A rich, warm, sliding alarm buzz (2 sub-oscillators descending in frequency for maximum feedback)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const gain2 = ctx.createGain();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(220, now);
    osc1.frequency.exponentialRampToValueAtTime(110, now + 0.3);

    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(165, now); // Perfect fifth lower harmonic
    osc2.frequency.exponentialRampToValueAtTime(82.5, now + 0.3);

    // Dynamic clean volume envelope
    gain1.gain.setValueAtTime(0.24, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    gain2.gain.setValueAtTime(0.08, now); // Low harmonic back support
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.32);

    osc2.start(now);
    osc2.stop(now + 0.32);
  } catch (error) {
    console.warn('Audio play failed', error);
  }
};

// High-fidelity light digital click sound for button/card selection
export const playClickTone = () => {
  if (isMutedGlobal) return;
  const ctx = getContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    // Friendly, crisp digital high tap frequency
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);
  } catch (e) {
    // Ignore silent fallback
  }
};

export const getAudioMuted = () => isMutedGlobal;

export const setAudioMuted = (muted: boolean) => {
  isMutedGlobal = muted;
};
