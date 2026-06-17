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

    // A pleasant dual-tone chime (staggered slightly): C5 (523Hz) then E5 (659Hz)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const gain2 = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(659.25, now + 0.08);

    // Fade outs for smooth sound
    gain1.gain.setValueAtTime(0.06, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    gain2.gain.setValueAtTime(0.0, now);
    gain2.gain.setValueAtTime(0.06, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.35);

    osc2.start(now + 0.08);
    osc2.stop(now + 0.5);
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

    // A prompt, warm, sliding alarm buzz (triangle wave descending from A3 to A2)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.28);
  } catch (error) {
    console.warn('Audio play failed', error);
  }
};

export const getAudioMuted = () => isMutedGlobal;

export const setAudioMuted = (muted: boolean) => {
  isMutedGlobal = muted;
};
