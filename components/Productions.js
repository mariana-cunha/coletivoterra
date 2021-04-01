import styles from '../styles/components/Productions.module.css';

export default function Productions(){
    return ( 
        <section className={styles.secao}>
            <div className={styles.production}>
                <img src="deitado.jpg" alt=""></img>
                <div className={styles.description}>
                    <h3>mecanica</h3>
                    <p>lorem ipsum</p>
                </div>
            </div>
            <div className={styles.production}>
                <img src="ultima.jpg" alt=""></img>
                <div className={styles.description}>
                    <h3></h3>
                    <p></p>
                </div>
            </div>
            <div className={styles.production}>
                <img src="deitado.jpg" alt=""></img>
                <div className={styles.description}>
                    <h3></h3>
                    <p></p>
                </div>
            </div>
            
        </section>
    );
}