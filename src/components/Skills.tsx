import { Fade, Slide } from 'react-awesome-reveal';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiRemix,
  SiStorybook,
  SiTypescript,
} from 'react-icons/si';

export default function Skills() {
  const techStack = [
    { icon: <SiHtml5 />, label: 'HTML5' },
    { icon: <SiCss3 />, label: 'CSS3' },
    { icon: <SiJavascript />, label: 'JavaScript' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <SiReact />, label: 'React' },
    { icon: <SiStorybook />, label: 'Storybook' },
    { icon: <SiNextdotjs />, label: 'Next.js' },
    { icon: <SiRemix />, label: 'Remix.js' },
    { icon: <SiMysql />, label: 'SQL' },
    { icon: <SiMongodb />, label: 'MongoDB' },
    { icon: <SiExpress />, label: 'Express' },
    { icon: <SiNodedotjs />, label: 'Node.js' },
  ];

  return (
    <section id='skills' className='py-20 bg-amber-900 text-white'>
      <Fade triggerOnce className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-12'>Skills</h2>
        <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-8 justify-items-center'>
          <Slide triggerOnce direction='up' damping={0.2}>
            {techStack.map((tech) => (
              <div key={tech.label} className='flex flex-col items-center'>
                <div
                  className='text-5xl text-amber-100 hover:text-blue-600 transition'
                  role='img'
                  aria-label={tech.label}
                >
                  {tech.icon}
                </div>
                <span className='mt-2 text-sm text-amber-100'>
                  {tech.label}
                </span>
              </div>
            ))}
          </Slide>
        </div>
      </Fade>
    </section>
  );
}
