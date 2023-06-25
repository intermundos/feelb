type TRoute = {
    path: string;
    name: string;
    displayName: string;
    menuName?: string;
    meta?: Record<string, unknown>;
    children?: Record<string, TRoute>
}

type TRouteMap = Record<string, TRoute>
