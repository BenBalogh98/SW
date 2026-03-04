import { NavigateNext } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import { Link as RouterLink, matchRoutes, RouteObject, useLocation } from 'react-router-dom';
import { BreadcrumbMatch } from '../interfaces/types';
import { homePageBreadcrumb, planetsPageBreadcrumb, filmsPageBreadcrumb, residentsPageBreadcrumb, planetDetailsBreadcrumb, filmDetailsBreadcrumb, residentDetailsBreadcrumb } from '../consts/breadcrumbFunctions';

const breadcrumbRoutes: RouteObject[] = [
    {
        path: '/SW',
        handle: homePageBreadcrumb,
        children: [
            { path: 'planets', handle: planetsPageBreadcrumb },
            { path: 'films', handle: filmsPageBreadcrumb },
            { path: 'residents', handle: residentsPageBreadcrumb },
            {
                path: 'planet',
                handle: planetsPageBreadcrumb,
                children: [{ path: ':itemName', handle: planetDetailsBreadcrumb }]
            },
            {
                path: 'film',
                handle: filmsPageBreadcrumb,
                children: [{ path: ':itemName', handle: filmDetailsBreadcrumb }]
            },
            {
                path: 'resident',
                handle: residentsPageBreadcrumb,
                children: [{ path: ':itemName', handle: residentDetailsBreadcrumb }]
            }
        ]
    }
];

export default function BasicBreadcrumbs() {
    const location = useLocation();

    const crumbs = useMemo(() => {
        const matches = matchRoutes(breadcrumbRoutes, location) ?? [];
        return matches
            .filter((match) => match.route.handle?.breadcrumb)
            .map((match) => {
                const label = match.route.handle.breadcrumb({ params: match.params } as BreadcrumbMatch);
                let to = match.pathnameBase;

                if (match.route.path === 'planet') {
                    to = '/SW/planets';
                }

                if (match.route.path === 'film') {
                    to = '/SW/films';
                }

                if (match.route.path === 'resident') {
                    to = '/SW/residents';
                }

                return {
                    label,
                    to
                };
            })
            .filter((crumb) => crumb.label);
    }, [location]);

    if (crumbs.length === 0) {
        return null;
    }

    return (
        <Breadcrumbs style={{ color: 'white' }} separator={<NavigateNext />} aria-label="breadcrumb">
            {crumbs.map((crumb, index) =>
                index === crumbs.length - 1 ? (
                    <Typography color="white" key={crumb.to}>
                        {crumb.label}
                    </Typography>
                ) : (
                    <Link
                        key={crumb.to}
                        underline="hover"
                        color="white"
                        component={RouterLink}
                        to={crumb.to}
                    >
                        {crumb.label}
                    </Link>
                )
            )}
        </Breadcrumbs>
    );
}