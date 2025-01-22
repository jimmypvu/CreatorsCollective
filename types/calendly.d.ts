declare namespace Calendly {
  interface BadgeWidgetOptions {
    url: string;
    text: string;
    color: string;
    textColor: string;
    branding: boolean;
  }

  interface PopupWidgetOptions {
    url: string;
    prefill?: {
      email?: string;
      firstName?: string;
      lastName?: string;
      name?: string;
    };
    customData?: Record<string, string>;
  }

  function initBadgeWidget(options: BadgeWidgetOptions): void;
  function initPopupWidget(options: PopupWidgetOptions): void;
}

declare global {
  interface Window {
    Calendly: typeof Calendly;
  }
}
