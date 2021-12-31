import Header from '../Header/Header';
import Sidebar from '../Sidebar/index';
import { LayoutProps } from '../Layout/types';
import styles from './Layout.module.css';

function Layout({ children }: LayoutProps) {
    return (
        <div className={styles['layout-container']}>
            <Header />
            <main>
                <Sidebar />
                <article className={styles['article-container']}>
                    {children}
                </article>
            </main>
        </div>
    );
}

export default Layout;
