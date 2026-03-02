import { NavigateNext } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function BasicBreadcrumbs(breadcrumbs: any) {
    return (
        <Breadcrumbs separator={<NavigateNext />} aria-label="breadcrumb">
            { }
            {/* <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            <Link underline="hover" color="inherit" href="/planets">
                Planets
            </Link>
            <Typography color="text.primary">
                Tatooine
            </Typography> */}
        </Breadcrumbs>
    );
}