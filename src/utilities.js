export const WEEKDAYS_SHORT = { fr: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'] }

export const MONTHS = { fr: [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ] }

export const WEEKDAYS_LONG = { fr: [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ] }

export const FIRST_DAY_OF_WEEK = { fr: 1 }

export const numberOfMonthsDisplayed = 4

export const MONTHS_DISPLAYED = []

const currentMonth = new Date().getMonth()

const currentYear = new Date().getFullYear()

for (let i = 0; i < numberOfMonthsDisplayed; i++) {
    MONTHS_DISPLAYED.push(
        {
            month: MONTHS['fr'][currentMonth + i > 11 ? currentMonth + i - 12 : currentMonth + i],
            year: currentMonth + i > 11 ? currentYear + 1 : currentYear
        }
    )
}

