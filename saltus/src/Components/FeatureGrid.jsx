import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import fr1 from "../assets/images/fr1.png";
import fr2 from "../assets/images/fr2.png";
import fr3 from "../assets/images/fr3.png";
import fr4 from "../assets/images/fr4.png";

const FeatureGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 1 });

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-10 gap-10">
      {[
        { img: fr4, title: "Track Performance in Real Time", text: "Give Team leaders the tools to monitor progress and drive accountability." },
        { img: fr3, title: "Turn Data into Insights", text: "Automatically generate clear, actionable stories from team data." },
        { img: fr1, title: "Flexible Work Task Delivery", text: "Share updates your way, whether it’s weekly, monthly, or quarterly." },
        { img: fr2, title: "Create Reports in Minutes", text: "Generate reports for teams, managers, and stakeholders effortlessly." },
      ].map((feature, index) => (
        <motion.div
          key={index}
          className="p-5 bg-white rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          transition={{ delay: index * 0.5 }}
          viewport={{ once: true }}
        >
          <img src={feature.img} alt="" />
          <h3 className="text-[#274C78] text-[17px] font-[600] pb-0">{feature.title}</h3>
          <p className="text-[#7F8695] font-[400] text-[14px] pt-0">{feature.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
