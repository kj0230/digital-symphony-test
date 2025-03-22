import styles from "./PointMarker.module.scss";

export default function PointMarker() {
  return (
    <div className={styles.pointMarkerOuter}>
      <div className={styles.pointMarkerInner} />
    </div>
  );
}
