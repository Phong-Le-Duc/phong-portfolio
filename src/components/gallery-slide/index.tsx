import styles from "./slide.module.css";
import { slideImages } from "@/data/projects";

type GallerySlideProps = {
    items?: typeof slideImages;
};

export default function GallerySlide({
    items = slideImages,
}: GallerySlideProps) {
    const groupCount = 4;
    const groups = Array.from({ length: groupCount }, () => items);

    return (
        <section className={styles.gallery} aria-label="Project gallery">
            <div className={styles.galleryTrack}>
                {groups.map((group, groupIndex) => (
                    <div key={`group-${groupIndex}`} className={styles.galleryGroup}>
                        {group.map((item, itemIndex) => (
                            <article
                                key={`${item.id}-${groupIndex}-${itemIndex}`}
                                className={styles.galleryItem}
                            >
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${item.alt} in a new tab`}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className={styles.galleryImage}
                                    />
                                </a>
                            </article>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}