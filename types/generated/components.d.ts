import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_uses';
  info: {
    displayName: 'About us';
  };
  attributes: {
    about_us_picture: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    subtext: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedButtonCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_button_ctas';
  info: {
    displayName: 'button cta';
  };
  attributes: {
    text_btn: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {};
}

export interface SharedGalery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galeries';
  info: {
    displayName: 'galery';
  };
  attributes: {
    description: Schema.Attribute.Text;
    galery_cta: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    floating_fish: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    help_cta: Schema.Attribute.Component<'shared.button-cta', false>;
    hero_bg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    main_logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    main_text: Schema.Attribute.Text;
    subtext: Schema.Attribute.String;
    volunteer_cta: Schema.Attribute.Component<'shared.button-cta', false>;
  };
}

export interface SharedHowToHelp extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_to_helps';
  info: {
    displayName: 'How to help';
  };
  attributes: {};
}

export interface SharedImpact extends Struct.ComponentSchema {
  collectionName: 'components_shared_impacts';
  info: {
    displayName: 'Impact';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    background_mobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    impact_card: Schema.Attribute.Component<'shared.card', true>;
    main_text: Schema.Attribute.String;
    subtext: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavbar extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbars';
  info: {
    displayName: 'navbar';
  };
  attributes: {
    about: Schema.Attribute.String;
    galery: Schema.Attribute.String;
    impact: Schema.Attribute.String;
    volunteer: Schema.Attribute.String;
    work: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedVolunteer extends Struct.ComponentSchema {
  collectionName: 'components_shared_volunteers';
  info: {
    displayName: 'Volunteer';
  };
  attributes: {};
}

export interface SharedWork extends Struct.ComponentSchema {
  collectionName: 'components_shared_works';
  info: {
    displayName: 'What we do';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    cards: Schema.Attribute.Component<'shared.card', true>;
    subtext: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.about-us': SharedAboutUs;
      'shared.button-cta': SharedButtonCta;
      'shared.card': SharedCard;
      'shared.contact': SharedContact;
      'shared.galery': SharedGalery;
      'shared.hero': SharedHero;
      'shared.how-to-help': SharedHowToHelp;
      'shared.impact': SharedImpact;
      'shared.media': SharedMedia;
      'shared.navbar': SharedNavbar;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.volunteer': SharedVolunteer;
      'shared.work': SharedWork;
    }
  }
}
