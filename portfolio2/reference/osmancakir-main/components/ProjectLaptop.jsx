import Image from "next/image";
import Link from "next/link";

const ProjectLaptop = ({ image, title, description, link, tags, stats }) => {
  return (
    <div className="project-laptop-container">
      <div className="laptop-display">
        <div className="laptop-frame">
          <div className="laptop-screen">
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {stats && stats.length > 0 && (
          <div className="project-stats">
            {stats.map((stat, idx) => (
              <div className="project-stat" key={idx}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag, idx) => (
              <span className="project-tag" key={idx}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="view-project-link">View Project →</div>
      </div>
    </div>
  );
};

export default ProjectLaptop;
