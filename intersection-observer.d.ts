declare class IntersectionObserver {
    constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit);
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
  }
  
  interface IntersectionObserverInit {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
  }
  
  interface IntersectionObserverEntry {
    readonly target: Element;
    readonly intersectionRatio: number;
    readonly isIntersecting: boolean;
    readonly intersectionRect: DOMRectReadOnly;
  }
  
  type IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => void;
  
  declare module 'intersection-observer' {
    export = IntersectionObserver;
  }
  