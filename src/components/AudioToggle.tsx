/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { getAudioMuted, setAudioMuted } from '../lib/audio';

interface AudioToggleProps {
  onToggle: () => void;
  muted: boolean;
  designStyle?: 'neobrutalist' | 'modern';
}

export const AudioToggle: React.FC<AudioToggleProps> = ({ onToggle, muted, designStyle = 'neobrutalist' }) => {
  const isN = designStyle === 'neobrutalist';
  
  const handleToggle = () => {
    setAudioMuted(!muted);
    onToggle();
  };

  return (
    <button
      id="btn-audio-toggle"
      onClick={handleToggle}
      className={`p-3 rounded-2xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
        isN
          ? 'border-4 border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B] hover:translate-y-0.5 hover:shadow-none bg-white text-[#4D3B3B]'
          : 'border border-slate-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] bg-white hover:bg-slate-50'
      } ${
        muted
          ? isN ? 'bg-[#FFF5F5] text-[#FF6B6B]' : 'text-rose-500'
          : isN ? 'bg-[#E8F5E9] text-[#4ECDC4]' : 'text-emerald-500'
      }`}
      title={muted ? 'Töne einschalten' : 'Töne stummschalten'}
      aria-label="Töne an/aus"
    >
      {muted ? <VolumeX className="w-5 h-5 stroke-[2]" /> : <Volume2 className="w-5 h-5 stroke-[2]" />}
    </button>
  );
};
