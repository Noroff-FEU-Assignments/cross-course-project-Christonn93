# Here is all files regarding the style for the webpage

## Colours from design CA

- Name: Smoky Black
    Hex: #0D0D0D
- Name: Dark Silver
    Hex: #726C6C
- Name: Rhythm
    Hex: #7A778C
- Name: Gray
    Hex: #808285
- Name: Yankees Blue
    Hex: #1D2540
- Name: Light Periwinkle
    Hex: #C5D1D9
- Name: Absolute Zero
    Hex: #074DD9
- Name: Electric Green1
    Hex: #00FF00
- Name: Electric Green2
    Hex: #0DF205
- Name: Red(pigment)
    Hex: #F21B1B
- Name: Anti-Flash White
    Hex: #F2F2F2
- Name: White
    Hex: #FFFFFF

## Typeface

Fonts - See Audiowide and Oswald on Google Fonts for further installation instructions.

- Audiowide:
    Link: <https://fonts.google.com/specimen/Audiowide?selectionfamily=Audiowide#standard-styles>  
    $mdc-typography-styles-headline1: (font-family: unquote("Audiowide"), font-size: 96);
    $mdc-typography-styles-headline2: (font-family: unquote("Audiowide"), font-size: 60);
    $mdc-typography-styles-headline3: (font-family: unquote("Audiowide"), font-size: 48);
    $mdc-typography-styles-headline4: (font-family: unquote("Audiowide"), font-size: 34);
    $mdc-typography-styles-headline5: (font-family: unquote("Audiowide"), font-size: 24);
    $mdc-typography-styles-headline6: (font-family: unquote("Audiowide"), font-size: 20);
    $mdc-typography-styles-subtitle1: (font-family: unquote("Audiowide"), font-size: 16);
    $mdc-typography-styles-subtitle2: (font-family: unquote("Audiowide"), font-size: 14);

- Oswald:
    link: <https://fonts.google.com/specimen/Oswald?selection.family=Oswald>
    $mdc-typography-styles-body1: (font-family: unquote("Oswald"), font-size: 15);
    $mdc-typography-styles-body2: (font-family: unquote("Oswald"), font-size: 13);
    $mdc-typography-styles-button: (font-family: unquote("Oswald"), font-size: 13);
    $mdc-typography-styles-overline: (font-family: unquote("Oswald"), font-size: 9);
    $mdc-typography-styles-caption: (font-family: unquote("Oswald"), font-size: 11);

### CSS Variables

/*-- Smoky Black --*/
    --primary-bg: #0D0D0D;
/*-- Anti-Flash White --*/
    --light-bg: #F2F2F2;
/*-- Electric Green1 --*/
     --primary-btn: #00FF00;
/*-- Dark Silver --*/
    --my-dark-silver: #726C6C;
/*-- Rhythm --*/
    --my-rhythm: #7A778C;
/*-- Gray --*/
    --my-gray: #808285;
/*-- Yankees Blue --*/
    --my-yankee-blue: #1D2540;
/*-- Light Periwinkle --*/
    --my-light-periwinkle: #C5D1D9;
/*-- Absolute Zero --*/
    --my-blue: #074DD9;
/*-- Electric Green2 --*/
    --my-green2: #0DF205;
/*-- Red(pigment) --*/
    --my-red: #f21b1b;
/*-- White --*/
    --my-white: #FFFFFF;

/*Typography*/
    --main-font: 'Audiowide', cursive;
    --secondary-font: 'Oswald', sans-serif;

/*Calculation*/
    --responsive: calc((var(--min-font) *1px) + (var(--max-font) - var(--min-font))* ((100vw - 420px) / (1200 - 420)));
/*Ranges from 421px to 1199px*/
}

- {
/*Typography*/
    --main-font: 'Audiowide', cursive;
    --secondary-font: 'Oswald', sans-serif;

/*Calculation*/
    --responsive: calc((var(--min-font) *1px) + (var(--max-font) - var(--min-font))* ((100vw - 420px) / (1200 - 420)));
/*Ranges from 421px to 1199px*/
}
