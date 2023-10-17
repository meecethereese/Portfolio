import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

export const Menu = (props) => {
    const { section, onSectionChange, menuOpened, setMenuOpened } = props;
    
    return (
        <>
            <button
                onClick={() => setMenuOpened(!menuOpened)}
                className={`z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 w-11 h-11 rounded-md ${
                    section === 0 ? "bg-ecru" : 
                    section === 1 ? "bg-pearl" :
                    section === 2 ? "bg-platinum" : "bg-gunmetal-150"
                }`}
            >
                <div
                    className={`h-0.5 rounded-md w-full transition-all ${
                        section === 0 ? "bg-jet" :
                        section === 1 ? "bg-gunmetal-50" :
                        section === 2 ? "bg-gunmetal-100" : "bg-platinum"
                    } ${
                        menuOpened ? "rotate-45 translate-y-0.5" : ""
                    }`}
                />
                <div
                    className={`h-0.5 rounded-md w-full my-1 ${
                        section === 0 ? "bg-jet" :
                        section === 1 ? "bg-gunmetal-50" :
                        section === 2 ? "bg-gunmetal-100" : "bg-platinum"
                    } ${
                        menuOpened ? "hidden" : ""
                    }`}
                />
                <div
                    className={`h-0.5 rounded-md w-full transition-all ${
                        section === 0 ? "bg-jet" :
                        section === 1 ? "bg-gunmetal-50" :
                        section === 2 ? "bg-gunmetal-100" : "bg-platinum"
                        } ${
                        menuOpened ? "-rotate-45" : ""
                        }`}
                />
            </button>
            <div
                className={`z-10 transition-all fixed top-0 right-0 bottom-0
                    overflow-hidden flex flex-col ${
                    section === 0 ? "bg-ecru" :
                    section === 1 ? "bg-pearl" :
                    section === 2 ? "bg-platinum" : "bg-gunmetal-150"
                } ${
                    menuOpened ? "w-full md:w-80" : "w-0"
                }`}
            >
                <div className="flex-1 flex items-smart justify-center flex-col gap-6 p-8">
                    <MenuButton 
                        section={section} 
                        label="About" 
                        onClick={() => onSectionChange(0)} 
                    />
                    <MenuButton
                        section={section}
                        label="Skills"
                        onClick={() => onSectionChange(1)}
                    />
                    <MenuButton
                        section={section}
                        label="Projects"
                        onClick={() => onSectionChange(2)}
                    />
                    <MenuButton
                        section={section}
                        label="Contact"
                        onClick={() => onSectionChange(3)}
                    />
                </div>
                <div>
                    <ul className="list-none p-0 text-center">
                        <li className="inline mr-2">
                            <a
                                className="Link text-4xl"
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/mauricioferrari7/"
                            >
                                <FontAwesomeIcon 
                                    className="hover:text-indigo-600"
                                    icon={faLinkedin} 
                                    color={`${
                                        section === 0 ? "#363636" :
                                        section === 1 ? "#2D333B" :
                                        section === 2 ? "#29313E" : "#E5E5E5"
                                    }`} 
                                />
                            </a>
                        </li>
                        <li className="inline mr-2">
                            <a
                                className="Link text-4xl"
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/meecethereese"
                            >
                                <FontAwesomeIcon 
                                    className="hover:text-indigo-600"
                                    icon={faGithub} 
                                    color={`${
                                        section === 0 ? "#363636" :
                                        section === 1 ? "#2D333B" :
                                        section === 2 ? "#29313E" : "#E5E5E5"
                                    }`}  
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

const MenuButton = (props) => {
    const { section, label, onClick } = props;
    return (
        <button
            onClick={onClick}
            className={`text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors   ${
                section === 0 ? "text-jet" :
                section === 1 ? "text-gunmetal-50" :
                section === 2 ? "text-gunmetal-100" : "text-platinum"
            }`}
        >
            {label}
        </button>
    )
}