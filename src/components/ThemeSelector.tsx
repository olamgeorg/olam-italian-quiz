/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { THEMES } from '../lib/themes';
import { BackgroundTheme } from '../types';
import { Sparkles, Palette, Layout } from 'lucide-react';

interface ThemeSelectorProps {
  currentThemeId: string;
  onSelectTheme: (themeId: string) => void;
  designStyle: 'neobrutalist' | 'modern';
  onSelectDesignStyle: (style: 'neobrutalist' | 'modern') => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentThemeId,
  onSelectTheme,
  designStyle,
  onSelectDesignStyle
}) => {
  const isN = designStyle === 'neobrutalist';

  return (
    <div 
      className={`transition-all duration-300 p-5 sm:p-6 ${
        isN 
          ? 'bg-white rounded-[24px] border-4 border-[#4D3B3B] shadow-[6px_6px_0px_#4D3B3B]' 
          : 'bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/50 shadow-sm shadow-slate-100/50'
      }`}
    >
      {/* Design Style Section */}
      <div className="mb-6 pb-6 border-b-2 border-dashed border-[#4D3B3B]/10">
        <div className="flex items-center gap-2 mb-3">
          <Layout className={`w-5 h-5 ${isN ? 'text-[#FF6B6B]' : 'text-[#6C5CE7]'}`} />
          <h3 className={`font-sans font-black text-lg sm:text-xl ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>
            Design-Ästhetik wählen
          </h3>
        </div>
        
        <p className={`text-sm sm:text-base mb-4 font-medium ${isN ? 'text-[#4D3B3B]' : 'text-slate-600'}`}>
          Wechseln Sie zwischen dem charmanten Retro-Comic-Look oder einer spürbar eleganten, modernen Premium-Oberfläche.
        </p>

        <div className="grid grid-cols-2 gap-3 max-w-md">
          <button
            onClick={() => onSelectDesignStyle('neobrutalist')}
            className={`cursor-pointer px-4 py-3 rounded-xl border-4 font-black text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
              isN
                ? 'bg-[#FFD93D] border-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B] -translate-y-0.5 text-[#4D3B3B]'
                : 'bg-white border-[#4d3b3b20] text-[#4D3B3B]/60 hover:border-[#4D3B3B] hover:text-[#4D3B3B]'
            }`}
          >
            🎨 Retro Comic
          </button>
          
          <button
            onClick={() => onSelectDesignStyle('modern')}
            className={`cursor-pointer px-4 py-3 rounded-xl border-4 font-black text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
              !isN
                ? 'bg-[#6C5CE7] border-[#4D3B3B] shadow-[3px_3px_0px_#4D3B3B] -translate-y-0.5 text-white'
                : 'bg-white border-[#4d3b3b20] text-[#4D3B3B]/60 hover:border-[#4D3B3B] hover:text-[#4D3B3B]'
            }`}
          >
            💎 Premium Glass
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <Palette className={`w-5 h-5 ${isN ? 'text-[#FFD93D] fill-[#FFD93D]' : 'text-[#6C5CE7]'}`} />
        <h3 className={`font-sans font-black text-lg sm:text-xl ${isN ? 'text-[#4D3B3B]' : 'text-slate-800'}`}>
          Farbschema anpassen (Vibrant Palette)
        </h3>
      </div>
      
      <p className={`font-medium text-sm sm:text-base mb-4 ${isN ? 'text-[#4D3B3B]' : 'text-slate-600'}`}>
        Wählen Sie ein energetisches Farbschema aus, um das gesamte Erscheinungsbild für den Kurs anzupassen.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {THEMES.map((theme) => {
          const isSelected = theme.id === currentThemeId;
          return (
            <button
              id={`theme-select-${theme.id}`}
              key={theme.id}
              onClick={() => onSelectTheme(theme.id)}
              className={`relative cursor-pointer flex flex-col items-center justify-between p-3 rounded-xl border-4 transition-all duration-250 outline-none ${
                isSelected
                  ? 'bg-[#FFD93D] border-[#4D3B3B] shadow-[4px_4px_0px_#4D3B3B] -translate-y-0.5 text-[#4D3B3B]'
                  : 'bg-white border-[#4d3b3b20] text-[#4D3B3B] hover:border-[#4D3B3B] hover:bg-[#FFF8E1]/50'
              }`}
            >
              <span className="text-xs font-black mb-2 text-center w-full truncate">
                {theme.name}
              </span>
              
              {/* Theme Preview Circle */}
              <div 
                className={`w-9 h-9 rounded-full bg-gradient-to-br ${theme.previewColor} border-2 border-[#4D3B3B] shadow-inner flex items-center justify-center`}
              >
                {isSelected && (
                  <span className="w-2.5 h-2.5 rounded-full bg-white border border-[#4D3B3B] shadow-sm" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
