import React from 'remotion';
import { Composition } from 'remotion';
import { StatScene } from './scenes/StatScene';
import { kiRisikenScenes } from './compositions/ki-risiken/scenes';

/**
 * Root — Registers all compositions for Remotion Studio
 * Each composition is a renderable scene/sequence
 */
export const Root: React.FC = () => {
  return (
    <>
      {/* MVP: StatScene (Scene 4 from KI-Risiken video) */}
      <Composition
        id="StatScene"
        component={StatScene}
        durationInFrames={420} // 14 seconds @ 30 FPS
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          stat: '2 / 3',
          description: 'der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich.',
          source: 'Bitkom 2025',
        }}
      />

      {/* Future: Add more scenes as components are implemented */}
      {/*
      <Composition
        id="QuoteScene"
        component={QuoteScene}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="HookScene"
        component={HookScene}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      */}
    </>
  );
};
