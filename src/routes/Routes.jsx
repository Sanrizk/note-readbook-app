import { createBrowserRouter } from 'react-router';
import Home from './../pages/Home/Home';
import Books from './../pages/Books/Books';
import Readings from './../pages/Readings/Readings';
import Done from './../pages/Done/Done';
import Backup from './../pages/Backup/Backup';

export const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/books",
    Component: Books
  },
  {
    path: "/readings",
    Component: Readings
  },
  {
    path: "/done",
    Component: Done
  },
  {
    path: "/backup",
    Component: Backup
  }
])