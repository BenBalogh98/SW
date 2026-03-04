import { BreadcrumbMatch } from '../interfaces/types';
export const homePageBreadcrumb = { breadcrumb: () => 'Home' };
export const planetsPageBreadcrumb = { breadcrumb: () => 'Planets' };
export const filmsPageBreadcrumb = { breadcrumb: () => 'Films' };
export const residentsPageBreadcrumb = { breadcrumb: () => 'Residents' };
export const planetDetailsBreadcrumb = { breadcrumb: ({ params }: BreadcrumbMatch) => params.itemName ?? '' };
export const filmDetailsBreadcrumb = { breadcrumb: ({ params }: BreadcrumbMatch) => params.itemName ?? '' };
export const residentDetailsBreadcrumb = { breadcrumb: ({ params }: BreadcrumbMatch) => params.itemName ?? '' };