declare namespace Calendly {
  interface BadgeWidgetOptions {
    url: string;
    text: string;
    color: string;
    textColor: string;
    branding: boolean;
  }

  function initBadgeWidget(options: BadgeWidgetOptions): void;
}

declare global {
  interface Window {
    Calendly: typeof Calendly;
  }
}
