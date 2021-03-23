
import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import {VscMenu} from 'react-icons/vsc'

import MediaQuery from 'react-responsive'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));



export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
      <div className="absolute right-8 top-10 mt-2">
          
      <MediaQuery maxWidth={985}>
        
      <div className={classes.root}>
      
      
        <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
        <div><VscMenu size={26} color="#f1f1f1"/></div>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              
            >
              <nav className="mt-14 absolute -right-8 grid gap-y-8 pt-4 bg-white  rounded-l-3xl w-44  ">
            
            <h1 className="bg-black-01 w-full rounded-l-3xl text-center ">
              <span className="  text-base font-medium text-white">
                Soluções
              </span> 
            </h1>
            <a href="#" className="-m-3 p-3 pl-6 flex items-center rounded-md hover:bg-yellow-300">
            
              <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              
              <span className="ml-3 text-base font-medium text-black-03">
                Performance
              </span>
            </a>

            <a href="#" className="-m-3 p-3 pl-6 flex items-center rounded-md hover:bg-yellow-300">
              
              <svg className="flex-shrink-0 h-6 w-6  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <span className="ml-3 text-base font-medium text-black-03">
                SEO
              </span>
            </a>

            <a href="#" className="-m-3 p-3 pl-6  flex items-center rounded-md hover:bg-yellow-300">
            
              <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="ml-3 text-base font-medium text-black-03">
                Security
              </span>
            </a>

            <a href="#" className="-m-3 p-3 pl-6  flex items-center rounded-md hover:bg-yellow-300">
              
              <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="ml-3 text-base font-medium text-black-03">
                Integrations
              </span>
            </a>

            <a href="#" className="-m-3 p-3 pl-6  flex items-center rounded-md hover:bg-yellow-300">
             
              <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="ml-3 text-base font-medium text-black-03">
                Automations
              </span>
            </a>
            <MenuList>
                <MenuItem>Contato</MenuItem>
                <MenuItem>Orçamentos</MenuItem>
                <MenuItem>Blog</MenuItem>
            </MenuList>
          </nav>
          
          
        </Grow>
        
          )}
            
        </Popper>
        </div>
    </div>
    </MediaQuery>
</div>
    
  );
}

