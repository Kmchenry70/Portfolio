import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Languages and framework/libraries I Know</p>
          <h2 className={`${styles.sectionHeadText} pb-10`}>Technolies.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, '')