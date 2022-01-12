import ReactDom from 'react-dom';

const AddNewProject = () => {
    return ReactDom.createPortal(
        <div></div>,
        document.getElementById('addNewProject')!
    );
};

export default AddNewProject;
