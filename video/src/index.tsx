import { Composition, registerRoot } from 'remotion';
import { StatScene } from './scenes/StatScene';
import { colors } from './styles/colors';

/**
 * Root — Remotion entry point
 * Registers all compositions for rendering
 */

const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="StatScene"
        component={StatScene}
        durationInFrames={420}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          stat: '2 / 3',
          description: 'der Jugendlichen in Deutschland nutzen KI-Chatbots wöchentlich.',
          source: 'Bitkom 2025',
          backgroundColor: colors.warmWhite,
        }}
      />
    </>
  );
};

registerRoot(Root);
