import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics'),
    roles: ['admin','user'],
  },  
  {
    title: 'User',
    path: '/user',
    icon: icon('ic-user'),
     roles: ['admin'],
  },
  {
    title: 'Product',
    path: '/products',
    icon: icon('ic-cart'),
    info: (
      <Label color="error" variant="inverted">
        +3
      </Label>
    ),
     roles: ['user'],
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: icon('ic-blog'),
     roles: ['user'],
  },
  {
    title: 'Sign in',
    path: '/sign-in',
    icon: icon('ic-lock'),
     roles: ['user','admin'],
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic-disabled'),
    roles: ['user','admin'],
  },
];
