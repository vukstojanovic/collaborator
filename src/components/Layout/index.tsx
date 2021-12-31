import Header from '../Header/Header';
import Sidebar from '../Sidebar/index';
import { LayoutProps } from '../Layout/types';
import styles from './Layout.module.css';

function Layout({ children }: LayoutProps) {
    return (
        <div className={styles['layout-container']}>
            <Header />
            <div className={styles['content-container']}>
                <Sidebar />
                <main>{children}</main>
            </div>
        </div>
    );
}

export default Layout;
