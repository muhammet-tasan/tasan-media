import { Composition, registerRoot } from 'remotion';
import { HookScene } from './scenes/HookScene';
import { StatScene } from './scenes/StatScene';
import { colors } from './styles/colors';

const Root: React.FC = () => (
  <>
    <Composition
      id="Scene01Hook"
      component={HookScene}
      durationInFrames={200}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        line1: 'Sie ist ruhig.',
        line2: 'Du hast deinen Abend.',
        backgroundImage: 'scene-01-hallway.png',
        durationInFrames: 200,
      }}
    />
    <Composition
      id="Scene04Stat"
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

registerRoot(Root);
