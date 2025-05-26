export type UnitGroupForUI =
    | 'Mass'
    | 'Volume'
    | 'Area'
    | 'Length'
    | 'Concentration'
    | 'Pressure'
    | 'Temperature'
    | 'Time'
    | 'Flow'
    | 'Energy'
    | 'Dimensionless';

export type UnitCommonForUI =
    /* Mass */         |'kg' | 'g' | 'mg' | 'µg'
    /* Volume */       | 'm3' | 'L' | 'mL' | 'µL'
    /* Area */         | 'm2' | 'cm2' | 'mm2'
    /* Length */       | 'm' | 'cm' | 'mm' | 'µm'
    /* Concentration */| '%' | 'ppm' | 'ppb' | 'mg/L' | 'g/L' | 'mol/L'
    /* Pressure */     | 'bar' | 'kPa' | 'hPa' | 'Pa'
    /* Temperature */  | '°C' | 'K'
    /* Time */         | 's' | 'min' | 'h' | 'd'
    /* Flow */         | 'mL/min'| 'L/min' | 'm3/h' | 'kg/h' | 'Nm3/h'
    /* Energy */       | 'kJ' | 'MJ' | 'kWh'
    /* Dimless */      | 'pH' | 'µS/cm';

export interface UnitOptionForUI {
    code: UnitCommonForUI;
    label: string;
    group: UnitGroupForUI;
}

export const UNIT_OPTIONS_FOR_UI: UnitOptionForUI[] = [
    // Mass
    { code: 'kg',  label: 'kilogram (kg)',               group: 'Mass' },
    { code: 'g',   label: 'gram (g)',                    group: 'Mass' },
    { code: 'mg',  label: 'milligram (mg)',              group: 'Mass' },
    { code: 'µg',  label: 'microgram (µg)',              group: 'Mass' },

    // Volume
    { code: 'm3',  label: 'cubic meter (m³)',            group: 'Volume' },
    { code: 'L',   label: 'liter (L)',                   group: 'Volume' },
    { code: 'mL',  label: 'milliliter (mL)',             group: 'Volume' },
    { code: 'µL',  label: 'microliter (µL)',             group: 'Volume' },

    // Area
    { code: 'm2',  label: 'square meter (m²)',           group: 'Area' },
    { code: 'cm2', label: 'square centimeter (cm²)',     group: 'Area' },
    { code: 'mm2', label: 'square millimeter (mm²)',     group: 'Area' },

    // Length
    { code: 'm',   label: 'meter (m)',                   group: 'Length' },
    { code: 'cm',  label: 'centimeter (cm)',             group: 'Length' },
    { code: 'mm',  label: 'millimeter (mm)',             group: 'Length' },
    { code: 'µm',  label: 'micrometer (µm)',             group: 'Length' },

    // Concentration
    { code: '%',    label: 'percent (%)',                group: 'Concentration' },
    { code: 'ppm',  label: 'parts per million (ppm)',    group: 'Concentration' },
    { code: 'ppb',  label: 'parts per billion (ppb)',    group: 'Concentration' },
    { code: 'mg/L', label: 'mg per liter',               group: 'Concentration' },
    { code: 'g/L',  label: 'g per liter',                group: 'Concentration' },
    { code: 'mol/L',label: 'mole per liter',             group: 'Concentration' },

    // Pressure
    { code: 'bar', label: 'bar',                         group: 'Pressure' },
    { code: 'kPa', label: 'kilopascal (kPa)',            group: 'Pressure' },
    { code: 'hPa', label: 'hectopascal (hPa)',           group: 'Pressure' },
    { code: 'Pa',  label: 'pascal (Pa)',                 group: 'Pressure' },

    // Temperature
    { code: '°C', label: 'degree Celsius',               group: 'Temperature' },
    { code: 'K',  label: 'kelvin (K)',                   group: 'Temperature' },

    // Time
    { code: 's',   label: 'second (s)',                  group: 'Time' },
    { code: 'min', label: 'minute (min)',                group: 'Time' },
    { code: 'h',   label: 'hour (h)',                    group: 'Time' },
    { code: 'd',   label: 'day (d)',                     group: 'Time' },

    // Flow
    { code: 'mL/min', label: 'milliliter per minute',    group: 'Flow' },
    { code: 'L/min',  label: 'liter per minute',         group: 'Flow' },
    { code: 'm3/h',   label: 'cubic meter per hour',     group: 'Flow' },
    { code: 'kg/h',   label: 'kilogram per hour',        group: 'Flow' },
    { code: 'Nm3/h',  label: 'normal m³ per hour',       group: 'Flow' },

    // Energy
    { code: 'kJ',  label: 'kilojoule (kJ)',              group: 'Energy' },
    { code: 'MJ',  label: 'megajoule (MJ)',              group: 'Energy' },
    { code: 'kWh', label: 'kilowatt-hour (kWh)',         group: 'Energy' },

    // Dimensionless / conductivity
    { code: 'pH',    label: 'pH',                        group: 'Dimensionless' },
    { code: 'µS/cm', label: 'microsiemens per cm',       group: 'Dimensionless' }
];
