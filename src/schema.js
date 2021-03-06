export default{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "title": ".eldat schema",
    "description": ".eldat schema",
    "type": "object",
    "definitions": {
        "document": {
            "title": "Dokument",
            "additionalProperties": false,
            "type": "object",
            "required": [
                "meta",
                "eldat"
            ],
            "properties": {
                "meta": {
                    "$ref": "#/definitions/meta"
                },
                "eldat": {
                    "$ref": "#/definitions/eldat"
                }
            }
        },
        "meta": {
            "title": "Envelope",
            "type": "object",
            "required": [
                "version"
            ],
            "properties": {
                "version": {
                    "title": "Version",
                    "type": "object",
                    
                    "required": [
                       "code"
                    ],
                    "properties": {
                        "code": {
                            "title": "Versions-Code",
                            "type": "string",
                            "default":"1.0.3",
                            "pattern": "[0-9]+.[0-9]+.[0-9]+$"
                        }
                    }
                }
            }
        },
        "eldat": {
            "type": "object",
            "oneOf": [
                {
                    "title": "Abrechnung",
                    "type": "object",
                    "properties": {
                        "clearing": {
                            "$ref": "#/definitions/clearing"
                        }
                    },
                    "required": ["clearing"]
                },
                {
                    "title": "Lieferschein",
                    "type": "object",
                    "properties": {
                        "delivery_note": {
                            "$ref": "#/definitions/delivery_note"
                        }
                    },
                    "required": ["delivery_note"]
                },
                {
                    "title": "Messprotokoll",
                    "type": "object",
                    "properties": {
                        "measurement_journal": {
                            "$ref": "#/definitions/measurement_journal"
                        }
                    },
                    "required": ["measurement_journal"]
                },
                {
                    "title": "Transportauftrag",
                    "type": "object",
                    "properties": {
                        "transfer_order": {
                            "$ref": "#/definitions/transfer_order"
                        }
                    },
                    "required": ["transfer_order"]
                },
                {
                    "title": "Holzbereitstellung",
                    "type": "object",
                    "properties": {
                        "wood_allocation": {
                            "$ref": "#/definitions/wood_allocation"
                        }
                    },
                    "required": ["wood_allocation"]
                }
            ],
            "additionalProperties": false,
        },
        "clearing": {
            "title": "Abrechnung",
            "type": "object",
            "required": [
                "clearing_address",
                "invoice_header"
            ],
            "properties": {
                "clearing_address": {
                    "$ref": "#/definitions/clearing_address",
                    "title": "Abrechnungsadressen",
                    "description": ""
                },
                "invoice_header": {
                    "$ref": "#/definitions/invoice_header",
                    "title": "Rechnungskopf",
                    "description": ""
                },
                "status": {
                    "$ref": "#/definitions/status",
                    "title": "Status",
                    "description": ""
                }
            }
        },
        "clearing_address": {
            "type": "object",
            "properties": {
                "supplier": {
                    "$ref": "#/definitions/supplier",
                    "title": "Lieferant",
                    "description": ""
                },
                "consumer": {
                    "$ref": "#/definitions/consumer",
                    "title": "Abnehmer",
                    "description": ""
                }
            },
            "required": [
                "supplier",
                "consumer"
            ]
        },
        "supplier": {
            "type": "object",
            "properties": {
                "business": {
                    "$ref": "#/definitions/business",
                    "title": "Betrieb",
                    "description": ""
                },
                "contact": {
                    "$ref": "#/definitions/contact",
                    "title": "Kontakt",
                    "description": ""
                }
            },
            "required": [
                "business",
                "contact"
            ]
        },
        "business": {
            "type": "object",
            "properties": {
                "business_data": {
                    "$ref": "#/definitions/business_data",
                    "title": "Betriebsdaten",
                    "description": ""
                },
                "tax": {
                    "$ref": "#/definitions/tax",
                    "title": "Besteuerung",
                    "description": ""
                }
            },
            "required": [
                "business_data"
            ]
        },
        "business_data": {
            "type": "object",
            "properties": {
                "name": {
                    "$ref": "#/definitions/name",
                    "title": "Name",
                    "description": ""
                },
                "street": {
                    "$ref": "#/definitions/street",
                    "title": "Straße und Hausnummer",
                    "description": ""
                },
                "postcode": {
                    "$ref": "#/definitions/postcode",
                    "title": "Postleitzahl",
                    "description": ""
                },
                "city": {
                    "$ref": "#/definitions/city",
                    "title": "Stadt",
                    "description": ""
                },
                "state": {
                    "$ref": "#/definitions/state",
                    "title": "Staat",
                    "description": ""
                },
                "certification": {
                    "$ref": "#/definitions/certification",
                    "title": "Zertifizierung",
                    "description": ""
                },
                "forestry": {
                    "$ref": "#/definitions/forestry",
                    "title": "Forstorganisation",
                    "description": ""
                },
                "bank_data": {
                    "$ref": "#/definitions/bank_data",
                    "title": "Bankdaten",
                    "description": ""
                },
                "process": {
                    "$ref": "#/definitions/process",
                    "title": "Vorgang",
                    "description": ""
                },
                "coordinate": {
                    "$ref": "#/definitions/coordinate",
                    "title": "Koordinaten",
                    "description": ""
                }
            },
            "required": [
                "name",
                "street",
                "postcode",
                "city",
                "state"
            ]
        },
        "name": {
            "type": "string",
            "maxLength": 100
        },
        "street": {
            "type": "string",
            "maxLength": 100
        },
        "postcode": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z]{3,10}$"
        },
        "city": {
            "type": "string",
            "maxLength": 100
        },
        "state": {
            "enum": [
                "DE",
                "BY",
                "BE",
                "BG",
                "DK",
                "EE",
                "FI",
                "FR",
                "GE",
                "GR",
                "IE",
                "IS",
                "IT",
                "CA",
                "HR",
                "LV",
                "LI",
                "LT",
                "LU",
                "NL",
                "NO",
                "AT",
                "PL",
                "PT",
                "RO",
                "RU",
                "SE",
                "CH",
                "RS",
                "SK",
                "SI",
                "ES",
                "CZ",
                "UA",
                "HU",
                "US",
                "GB",
                "CX"
            ],
            "options": {
                "enum_titles": [
                    "Deutschland",
                    "Belarus",
                    "Belgien",
                    "Bulgarien",
                    "Dänemark",
                    "Estland",
                    "Finnland",
                    "Frankreich",
                    "Georgien",
                    "Griechenland",
                    "Irland",
                    "Island",
                    "Italien",
                    "Kanada",
                    "Kroatien",
                    "Lettland",
                    "Liechtenstein",
                    "Litauen",
                    "Luxemburg",
                    "Niederlande",
                    "Norwegen",
                    "Österreich",
                    "Polen",
                    "Portugal",
                    "Rumänien",
                    "Russische Föderation",
                    "Schweden",
                    "Schweiz",
                    "Serbien",
                    "Slowakei",
                    "Slowenien",
                    "Spanien",
                    "Tschechien",
                    "Ukraine",
                    "Ungarn",
                    "Vereinigte Staaten von Amerika",
                    "Vereinigtes Königreich Großbritannien und Nordirland",
                    "Weihnachtsinseln"
                ]
            },
            "type": "string"
        },
        "certification": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "cert_type": {
                        "$ref": "#/definitions/cert_type",
                        "title": "Zertifizierung",
                        "description": "Angabe der forstlichen Zertifizierungsart"
                    },
                    "cert_no": {
                        "$ref": "#/definitions/cert_no",
                        "title": "Zertifizierungsnummer",
                        "description": "Angabe der eindeutigen Zertifizierungskennung"
                    }
                },
                "required": [
                    "cert_type",
                    "cert_no"
                ]
            },
            "properties": {}
        },
        "cert_type": {
            "enum": [
                "xy",
                "pefc",
                "fsc1",
                "natl",
                "iso0",
                "iso1",
                "iso2",
                "iso3",
                "iso4",
                "oeko",
                "qlab",
                "ralg",
                "fscf",
                "peco"
            ],
            "options": {
                "enum_titles": [
                    "Keine",
                    "PEFC FM Zertifikat",
                    "FSC COC Zertifikat",
                    "Naturland",
                    "DIN ISO 9000",
                    "DIN ISO 9001",
                    "DIN ISO 9002",
                    "DIN ISO 9003",
                    "DIN ISO 14000",
                    "Öko Audit",
                    "Q-Label",
                    "RAL Gütegemeinschaft",
                    "FSC FM Zertifikat",
                    "PEFC COC Zertifikat"
                ]
            },
            "type": "string"
        },
        "cert_no": {
            "type": "string",
            "maxLength": 100
        },
        "forestry": {
            "type": "object",
            "properties": {
                "business_type": {
                    "$ref": "#/definitions/business_type",
                    "title": "Betriebsart",
                    "description": "Definieren Sie die Art des Waldbesitzes"
                },
                "office_no": {
                    "$ref": "#/definitions/office_no",
                    "title": "Forstamtsnummer",
                    "description": "Offizielle Nummerierung des Forstamtes, falls vorhanden"
                },
                "office_name": {
                    "$ref": "#/definitions/office_name",
                    "title": "Forstamtsname",
                    "description": "Offizieller Name des Forstamtes, falls vorhanden"
                },
                "district_no": {
                    "$ref": "#/definitions/district_no",
                    "title": "Reviernummer",
                    "description": "Offizielle Nummerierung des Revieres, falls vorhanden"
                },
                "district_name": {
                    "$ref": "#/definitions/district_name",
                    "title": "Reviername",
                    "description": "Offizieller Name des Revieres, falls vorhanden"
                }
            }
        },
        "business_type": {
            "enum": [
                "bw",
                "lw",
                "kw",
                "kwgw",
                "kwki",
                "kwge",
                "kwgs",
                "pw",
                "pwki",
                "pwge",
                "th",
                "ha",
                "sond",
                "pwsg",
                "pwsm",
                "pwsk",
                "swso",
                "kwso",
                "pwso"
            ],
            "options": {
                "enum_titles": [
                    "Staatswald (Bund)",
                    "Staatswald (Land)",
                    "Körperschaftswald",
                    "Gemeindewald",
                    "Körperschaftswald (Kirchenwald)",
                    "Körperschaftswald (Gemeinschaften)",
                    "Körperschaftswald (Genossenschaftswald)",
                    "Privatwald",
                    "Privatwald (Kirchenwald)",
                    "Privatwald (Gemeinschaften)",
                    "Wald in der Verwaltung der Treuhandanstalt",
                    "Handel",
                    "Sondervermögen",
                    "Privatwald (sonstige, groß)",
                    "Privatwald (sonstige, mittel)",
                    "Privatwald (sonstige, klein)",
                    "Staatswald (sonstige)",
                    "Körperschaftswald (sonstige)",
                    "Privatwald (sonstige)"
                ]
            },
            "type": "string"
        },
        "office_no": {
            "type": "string",
            "maxLength": 30
        },
        "office_name": {
            "type": "string",
            "maxLength": 100
        },
        "district_no": {
            "type": "string",
            "pattern": "^[0-9\\.,\\-]{0,30}$"
        },
        "district_name": {
            "type": "string",
            "maxLength": 100
        },
        "bank_data": {
            "type": "object",
            "properties": {
                "payee_name": {
                    "$ref": "#/definitions/payee_name",
                    "title": "Zahlungsempfänger",
                    "description": "Name des Zahlungsempfängers"
                },
                "payee_bic": {
                    "$ref": "#/definitions/payee_bic",
                    "title": "BIC",
                    "description": "BIC des Zahlungsempfängers"
                },
                "payee_iban": {
                    "$ref": "#/definitions/payee_iban",
                    "title": "IBAN",
                    "description": "IBAN des Zahlungsempfängers"
                }
            },
            "required": [
                "payee_name",
                "payee_iban"
            ]
        },
        "payee_name": {
            "type": "string",
            "maxLength": 100
        },
        "payee_bic": {
            "type": "string",
            "pattern": "^[A-Z]{6}[A-Z0-9]{2,5}$"
        },
        "payee_iban": {
            "type": "string",
            "pattern": "^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,30}$"
        },
        "process": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "ref_type": {
                        "$ref": "#/definitions/ref_type",
                        "title": "Referenznummerntyp",
                        "description": "Definition der Vorgangs- bzw. Referenznummer"
                    },
                    "ref_no": {
                        "$ref": "#/definitions/ref_no",
                        "title": "Referenznummer",
                        "description": "Angabe der Vorgangs- oder Referenznummer"
                    },
                    "date": {
                        "$ref": "#/definitions/date",
                        "title": "Datum",
                        "description": "Datum zu dem die Vorgangs- oder Referenznummer erstellt wurde"
                    }
                },
                "required": [
                    "ref_type",
                    "ref_no"
                ]
            },
            "properties": {},
            "maxItems": 2
        },
        "ref_type": {
            "enum": [
                "afn",
                "hin",
                "kas",
                "rha",
                "rli",
                "rsp",
                "vli",
                "vta",
                "rta",
                "vha",
                "vsp",
                "vzn",
                "rhb",
                "vhb",
                "rhh",
                "vhh",
                "rka",
                "vka",
                "aec",
                "aew",
                "ael",
                "aes"
            ],
            "options": {
                "enum_titles": [
                    "Abfuhrfreigabenummer",
                    "Hiebsnummer",
                    "Kassenzeichen",
                    "Referenznummer Holzabnehmer",
                    "Referenznummer Lieferant",
                    "Referenznummer Spediteur",
                    "Vertragsnummer Lieferant",
                    "Vertragsnummer Transportauftraggeber",
                    "Referenznummer Transportauftraggeber",
                    "Vertragsnummer Holzabnehmer",
                    "Vertragsnummer Spediteur",
                    "Vorzeigungsnummer",
                    "Referenznummer Holzbesitzer",
                    "Vertragsnummer Holzbesitzer",
                    "Referenznummer Holzhändler",
                    "Vertragsnummer Holzhändler",
                    "Referenznummer Holzkäufer",
                    "Vertragsnummer Holzkäufer",
                    "Anliefernummer Entladestelle Container",
                    "Anliefernummer Entladestelle Waggon",
                    "Anliefernummer Entladestelle Lagerbox",
                    "Anliefernummer Entladestelle Sonstige"
                ]
            },
            "type": "string"
        },
        "ref_no": {
            "type": "string",
            "maxLength": 30
        },
        "date": {
            "type": "string",
            "format": "date-time"
        },
        "coordinate": {
            "type": "object",
            "properties": {
                "longitude": {
                    "$ref": "#/definitions/longitude",
                    "title": "Längengrad",
                    "description": "Ost-Koordinate in Dezimalgrad (z.B.: 8,916091918945312)"
                },
                "latitude": {
                    "$ref": "#/definitions/latitude",
                    "title": "Breitengrad",
                    "description": "Nord-Koordinate in Dezimalgrad (z.B.: 49,86861816524657)"
                },
                "crs": {
                    "$ref": "#/definitions/crs",
                    "title": "Koordinatensystem",
                    "description": "Angabe des Koordinatenreferenzsystems"
                }
            },
            "required": [
                "longitude",
                "latitude",
                "crs"
            ]
        },
        "longitude": {
            "type": "number"
        },
        "latitude": {
            "type": "number"
        },
        "crs": {
            "type": "string",
            "pattern": "[0-9]{4,5}"
        },
        "tax": {
            "type": "object",
            "properties": {
                "tax_type": {
                    "$ref": "#/definitions/tax_type",
                    "title": "Besteuerung",
                    "description": "Angabe zu Regel- oder Pauschalbesteuerung"
                },
                "tax_no_type": {
                    "$ref": "#/definitions/tax_no_type",
                    "title": "Steuernummerntyp",
                    "description": "Umsatzsteuer-ID oder Steuernummer"
                },
                "tax_no": {
                    "$ref": "#/definitions/tax_no",
                    "title": "Steuernummer",
                    "description": "Angabe der Umsatzsteuer-ID oder Steuernummer"
                }
            },
            "required": [
                "tax_no_type",
                "tax_no"
            ]
        },
        "tax_type": {
            "enum": [
                "reg",
                "pau"
            ],
            "options": {
                "enum_titles": [
                    "Regelbesteuert",
                    "Pauschalbesteuert"
                ]
            },
            "type": "string"
        },
        "tax_no_type": {
            "enum": [
                "ust",
                "stn",
                "xy"
            ],
            "options": {
                "enum_titles": [
                    "Umsatzsteuer-ID",
                    "Steuernummer",
                    "Keine"
                ]
            },
            "type": "string"
        },
        "tax_no": {
            "type": "string",
            "pattern": "[A-Z0-9/]{4,13}"
        },
        "contact": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "role_contact": {
                        "$ref": "#/definitions/role_contact",
                        "title": "Rolle des Kontaktes",
                        "description": "Angabe zur Funktion des Kontaktes"
                    },
                    "contact_name": {
                        "$ref": "#/definitions/contact_name",
                        "title": "Vorname",
                        "description": ""
                    },
                    "contact_surname": {
                        "$ref": "#/definitions/contact_surname",
                        "title": "Nachname",
                        "description": ""
                    },
                    "contact_telephone": {
                        "$ref": "#/definitions/contact_telephone",
                        "title": "Telefonnummer",
                        "description": ""
                    },
                    "contact_email": {
                        "$ref": "#/definitions/contact_email",
                        "title": "E-Mailadresse",
                        "description": ""
                    }
                },
                "required": [
                    "role_contact",
                    "contact_surname",
                    "contact_telephone",
                    "contact_email"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "role_contact": {
            "type": "string",
            "maxLength": 100
        },
        "contact_name": {
            "type": "string",
            "maxLength": 100
        },
        "contact_surname": {
            "type": "string",
            "maxLength": 100
        },
        "contact_telephone": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^\\+?[0-9 /-]{5,20}$"
            },
            "minItems": 1
        },
        "contact_email": {
            "type": "string",
            "pattern": "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
        },
        "consumer": {
            "type": "object",
            "properties": {
                "business": {
                    "$ref": "#/definitions/business",
                    "title": "Betrieb",
                    "description": ""
                },
                "contact": {
                    "$ref": "#/definitions/contact",
                    "title": "Kontakt",
                    "description": ""
                }
            },
            "required": [
                "business",
                "contact"
            ]
        },
        "invoice_header": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "process": {
                        "$ref": "#/definitions/process",
                        "title": "Vorgang",
                        "description": ""
                    },
                    "invoice_currency": {
                        "$ref": "#/definitions/invoice_currency",
                        "title": "Währung",
                        "description": "Währung, die der gesamten Rechnung zu Grunde liegt"
                    },
                    "invoice_type": {
                        "$ref": "#/definitions/invoice_type",
                        "title": "Rechnungstyp",
                        "description": "Art der Abrechnung"
                    },
                    "invoice_no": {
                        "$ref": "#/definitions/invoice_no",
                        "title": "Rechnungsnummer",
                        "description": "Eindeutige Kennung der Rechnung"
                    },
                    "invoice_cancel": {
                        "$ref": "#/definitions/invoice_cancel",
                        "title": "Storno",
                        "description": "Angabe ob hiermit eine Abrechnung storniert wird"
                    },
                    "cancel_ref_no": {
                        "$ref": "#/definitions/cancel_ref_no",
                        "title": "Stornierungsnummer",
                        "description": "Referenznummer zur Stornierung"
                    },
                    "doc_date": {
                        "$ref": "#/definitions/doc_date",
                        "title": "Datum des Beleges",
                        "description": "Datum zu dem die Abrechnung erstellt wird"
                    },
                    "service_period_from": {
                        "$ref": "#/definitions/service_period_from",
                        "title": "Leistungsbeginn",
                        "description": "Datum zu dem die Leistung begonnen wurde"
                    },
                    "service_period_until": {
                        "$ref": "#/definitions/service_period_until",
                        "title": "Leistungsende",
                        "description": "Datum zu dem die Leistung beendet wird"
                    },
                    "payment_procedure": {
                        "$ref": "#/definitions/payment_procedure",
                        "title": "Zahlungsverfahren",
                        "description": "Angabe zum gewählten Abrechnungsverfahren"
                    },
                    "invoice_text": {
                        "$ref": "#/definitions/invoice_text",
                        "title": "Rechnungstext",
                        "description": "Freie Texteingaben zur Abrechnung"
                    },
                    "cash_id": {
                        "$ref": "#/definitions/cash_id",
                        "title": "Kassenzeichen",
                        "description": "Verwendungszweck"
                    },
                    "net_price": {
                        "$ref": "#/definitions/net_price",
                        "title": "Nettopreis",
                        "description": "Nettopreis der gesamten erbrachten Leistung"
                    },
                    "discount_surcharge": {
                        "$ref": "#/definitions/discount_surcharge",
                        "title": "Rabatt oder Zuschlag",
                        "description": ""
                    },
                    "gross_price": {
                        "$ref": "#/definitions/gross_price",
                        "title": "Bruttopreis",
                        "description": "Bruttopreis der gesamten erbrachten Leistung"
                    },
                    "vat": {
                        "$ref": "#/definitions/vat",
                        "title": "Mehrwertsteuer",
                        "description": ""
                    },
                    "due_date_for_payment": {
                        "$ref": "#/definitions/due_date_for_payment",
                        "title": "Zahlungsziel",
                        "description": "Datum zu dem die Zahlung erfolgt sein soll"
                    },
                    "discount": {
                        "$ref": "#/definitions/discount",
                        "title": "Skonto",
                        "description": ""
                    },
                    "advance_payment": {
                        "$ref": "#/definitions/advance_payment",
                        "title": "Abschlagszahlung",
                        "description": ""
                    },
                    "payee": {
                        "$ref": "#/definitions/payee",
                        "title": "Zahlungsempfänger",
                        "description": ""
                    },
                    "invoice_item": {
                        "$ref": "#/definitions/invoice_item",
                        "title": "Rechnungsposition",
                        "description": ""
                    }
                },
                "required": [
                    "invoice_currency",
                    "invoice_type",
                    "invoice_no",
                    "invoice_cancel",
                    "doc_date",
                    "service_period_from",
                    "service_period_until",
                    "payment_procedure",
                    "cash_id",
                    "net_price",
                    "gross_price",
                    "due_date_for_payment",
                    "advance_payment",
                    "payee",
                    "invoice_item"
                ]
            },
            "properties": {}
        },
        "invoice_currency": {
            "enum": [
                "EUR",
                "USD",
                "BGN",
                "BYN",
                "CAD",
                "CHF",
                "CZK",
                "DKK",
                "GBP",
                "GEL",
                "HRK",
                "HUF",
                "NOK",
                "PLN",
                "RON",
                "RSD",
                "SEK",
                "UAH"
            ],
            "options": {
                "enum_titles": [
                    "Euro",
                    "US Dollar",
                    "Lew",
                    "Rubel",
                    "Kanadische Dollar",
                    "Franken",
                    "Tschechische Krone",
                    "Dänische Krone",
                    "Pfund",
                    "Lari",
                    "Kuna",
                    "Forint",
                    "Norwegische Krone",
                    "Zloty",
                    "Leu",
                    "Dinar",
                    "Schwedische Krone",
                    "Hrywnja"
                ]
            },
            "type": "string"
        },
        "invoice_type": {
            "enum": [
                "abs",
                "end",
                "gut",
                "tei"
            ],
            "options": {
                "enum_titles": [
                    "Abschlagsrechnung",
                    "Endabrechnung",
                    "Gutschrift",
                    "Teilrechnung"
                ]
            },
            "type": "string"
        },
        "invoice_no": {
            "type": "string",
            "maxLength": 30
        },
        "invoice_cancel": {
            "type": "boolean"
        },
        "cancel_ref_no": {
            "type": "string",
            "maxLength": 30
        },
        "doc_date": {
            "type": "string",
            "format": "date-time"
        },
        "service_period_from": {
            "type": "string",
            "format": "date-time"
        },
        "service_period_until": {
            "type": "string",
            "format": "date-time"
        },
        "payment_procedure": {
            "enum": [
                "rev",
                "lav",
                "guv"
            ],
            "options": {
                "enum_titles": [
                    "Rechnungsverfahren",
                    "Lastschriftverfahren",
                    "Gutschriftsverfahren"
                ]
            },
            "type": "string"
        },
        "invoice_text": {
            "type": "string",
            "maxLength": 255
        },
        "cash_id": {
            "type": "string",
            "maxLength": 30
        },
        "net_price": {
            "type": "number"
        },
        "discount_surcharge": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "disc_sur_type": {
                        "$ref": "#/definitions/disc_sur_type",
                        "title": "Rabatt- oder Zuschlagstyp",
                        "description": "Angabe ob es sich um einen Rabatt oder Zuschlag handelt"
                    },
                    "disc_sur_value": {
                        "$ref": "#/definitions/disc_sur_value",
                        "title": "Wert",
                        "description": "Höhe von gewährtem Rabatt oder auferlegtem Zuschlag"
                    },
                    "disc_sur_unit": {
                        "$ref": "#/definitions/disc_sur_unit",
                        "title": "Rabatt- oder Zuschlagseinheit",
                        "description": "Angabe wie sich Rabatt- oder Zuschlagshöhe ermitteln"
                    },
                    "det_base": {
                        "$ref": "#/definitions/det_base",
                        "title": "Bemessungsgrundlage",
                        "description": "Einheitsangabe, falls Preis pro Einheit"
                    },
                    "disc_sur_text": {
                        "$ref": "#/definitions/disc_sur_text",
                        "title": "Bemerkungen",
                        "description": "Freie Texteingabe zu Rabatt oder Zuschlag"
                    }
                },
                "required": [
                    "disc_sur_type",
                    "disc_sur_value",
                    "disc_sur_unit",
                    "disc_sur_text"
                ]
            },
            "properties": {}
        },
        "disc_sur_type": {
            "enum": [
                "dis",
                "sur"
            ],
            "options": {
                "enum_titles": [
                    "Rabatt",
                    "Zuschlag"
                ]
            },
            "type": "string"
        },
        "disc_sur_value": {
            "type": "number"
        },
        "disc_sur_unit": {
            "enum": [
                "bei",
                "bet",
                "pro"
            ],
            "options": {
                "enum_titles": [
                    "Betrag je Einheit",
                    "Absolutbetrag",
                    "Prozent"
                ]
            },
            "type": "string"
        },
        "det_base": {
            "enum": [
                "cbm",
                "lfm",
                "stk",
                "srm",
                "cft",
                "lut",
                "atr",
                "rmm",
                "fmo",
                "std",
                "min",
                "klm",
                "met",
                "trz",
                "pol",
                "ein",
                "fah",
                "son"
            ],
            "options": {
                "enum_titles": [
                    "Kubikmeter",
                    "Laufmeter",
                    "Stück",
                    "Schüttraummeter",
                    "Kubikfuß",
                    "Tonne lutro",
                    "Tonne atro",
                    "Raummeter",
                    "Festmeter",
                    "Stunde",
                    "Minute",
                    "Kilometer",
                    "Meter",
                    "Transportzone",
                    "Polter",
                    "Einzelstamm",
                    "Fahrt",
                    "Sonstige"
                ]
            },
            "type": "string"
        },
        "disc_sur_text": {
            "type": "string",
            "maxLength": 255
        },
        "gross_price": {
            "type": "number"
        },
        "vat": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "vat_percent": {
                        "$ref": "#/definitions/vat_percent",
                        "title": "Mehrwertsteuerprozent",
                        "description": "Angabe des fälligen Mehrwertsteuerprozentes"
                    },
                    "vat_comp_contr": {
                        "$ref": "#/definitions/vat_comp_contr",
                        "title": "Mehrwertsteuerpflichtbetrag",
                        "description": "Höhe des Mehrwertsteuerpflichtbetrages"
                    },
                    "vat_value": {
                        "$ref": "#/definitions/vat_value",
                        "title": "Mehrwertsteuerbetrag",
                        "description": "Betrag der fälligen Mehrwertsteuer auf die Gesamtrechnung"
                    },
                    "vat_text": {
                        "$ref": "#/definitions/vat_text",
                        "title": "Bemerkungen",
                        "description": "Freie Texteingabe zur fälligen Mehrwertsteuer"
                    }
                },
                "required": [
                    "vat_percent",
                    "vat_comp_contr",
                    "vat_value",
                    "vat_text"
                ]
            },
            "properties": {}
        },
        "vat_percent": {
            "type": "number",
            "maximum": 100
        },
        "vat_comp_contr": {
            "type": "number"
        },
        "vat_value": {
            "type": "number"
        },
        "vat_text": {
            "type": "string",
            "maxLength": 255
        },
        "due_date_for_payment": {
            "type": "string",
            "format": "date-time"
        },
        "discount": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "discount_period": {
                        "$ref": "#/definitions/discount_period",
                        "title": "Skontofrist",
                        "description": "Datum bis zu dem ein Skonto gewährt wird"
                    },
                    "discount_percent": {
                        "$ref": "#/definitions/discount_percent",
                        "title": "Skontoprozent",
                        "description": "Angelegtes Prozent Skonto auf den Gesamtrechnungsbetrag"
                    },
                    "discount_value": {
                        "$ref": "#/definitions/discount_value",
                        "title": "Skontowert",
                        "description": "Errechneter Betrag Skonto, der auf die Gesamtrechnung gewährt wird"
                    },
                    "discount_text": {
                        "$ref": "#/definitions/discount_text",
                        "title": "Bemerkungen",
                        "description": "Freie Texteingabe zum gewährten Skonto"
                    }
                },
                "required": [
                    "discount_period",
                    "discount_percent",
                    "discount_value",
                    "discount_text"
                ]
            },
            "properties": {}
        },
        "discount_period": {
            "type": "string",
            "format": "date-time"
        },
        "discount_percent": {
            "type": "number",
            "maximum": 100
        },
        "discount_value": {
            "type": "number"
        },
        "discount_text": {
            "type": "string",
            "maxLength": 255
        },
        "advance_payment": {
            "type": "object",
            "properties": {
                "ad_pay_value": {
                    "$ref": "#/definitions/ad_pay_value",
                    "title": "Betrag der Abschlagszahlung",
                    "description": "Höhe der bereits getätigten Abschlagszahlung"
                },
                "ad_pay_ref_no": {
                    "$ref": "#/definitions/ad_pay_ref_no",
                    "title": "Referenznummer",
                    "description": "Referenznummer zur bereits getätigten Abschlagszahlung"
                }
            },
            "required": [
                "ad_pay_value",
                "ad_pay_ref_no"
            ]
        },
        "ad_pay_value": {
            "type": "number"
        },
        "ad_pay_ref_no": {
            "type": "string",
            "maxLength": 30
        },
        "payee": {
            "type": "object",
            "properties": {
                "bank_data": {
                    "$ref": "#/definitions/bank_data",
                    "title": "Bankdaten",
                    "description": ""
                },
                "payee_vat_rate": {
                    "$ref": "#/definitions/payee_vat_rate",
                    "title": "Mehrwertsteuersatz",
                    "description": "Pflichtgemäßer Mehrwertsteuersatz des Zahlungsempfängers"
                }
            },
            "required": [
                "payee_vat_rate"
            ]
        },
        "payee_vat_rate": {
            "type": "number",
            "maximum": 100
        },
        "invoice_item": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "wood_id": {
                        "$ref": "#/definitions/wood_id",
                        "title": "Holznummer",
                        "description": ""
                    },
                    "aggregation_type": {
                        "$ref": "#/definitions/aggregation_type",
                        "title": "Aggregationstyp",
                        "description": "Kriterium nach dem Aggregiert wurde"
                    },
                    "quality": {
                        "$ref": "#/definitions/quality",
                        "title": "Qualität",
                        "description": ""
                    },
                    "grade": {
                        "$ref": "#/definitions/grade",
                        "title": "Sorte",
                        "description": "Angabe zur Holzsortierung"
                    },
                    "use": {
                        "$ref": "#/definitions/use",
                        "title": "Verwendungssorte",
                        "description": "Angabe zur Verwendungssorte des Holzes"
                    },
                    "species": {
                        "$ref": "#/definitions/species",
                        "title": "Holzart",
                        "description": "Angabe zur Holzart"
                    },
                    "amount": {
                        "$ref": "#/definitions/amount",
                        "title": "Menge",
                        "description": ""
                    },
                    "mean_length": {
                        "$ref": "#/definitions/mean_length",
                        "title": "Mittlere Länge",
                        "description": "(Mittlere) Länge des Holzes in der Aggregation"
                    },
                    "grade_length": {
                        "$ref": "#/definitions/grade_length",
                        "title": "Sortenlänge",
                        "description": "Längenklasse des Holzes gemäß Sortierung"
                    },
                    "diameter": {
                        "$ref": "#/definitions/diameter",
                        "title": "Durchmesser",
                        "description": ""
                    },
                    "thickness_class": {
                        "$ref": "#/definitions/thickness_class",
                        "title": "Stärkeklasse",
                        "description": "Klassifizierung der mittleren Stammstärke"
                    },
                    "wood_certification": {
                        "$ref": "#/definitions/wood_certification",
                        "title": "Holzzertifizierung",
                        "description": ""
                    },
                    "article_class": {
                        "$ref": "#/definitions/article_class",
                        "title": "Artikelgruppe",
                        "description": "Angabe welcher Artikelgruppe die Rechnungsposition zuzuordnen ist"
                    },
                    "article_type": {
                        "$ref": "#/definitions/article_type",
                        "title": "Artikeltyp",
                        "description": "Nähere Beschreibung des Artikels, falls die Artikelklasse zu unspezifisch ist"
                    },
                    "invoice_item_text": {
                        "$ref": "#/definitions/invoice_item_text",
                        "title": "Bemerkungen",
                        "description": "Freie Texteingabe für Bemerkungen zur Rechnungspositin"
                    },
                    "attribute": {
                        "$ref": "#/definitions/attribute",
                        "title": "Preismerkmale",
                        "description": "Holzmerkmale die den Preis beeinflussen"
                    },
                    "product_price": {
                        "$ref": "#/definitions/product_price",
                        "title": "Produktpreis",
                        "description": ""
                    },
                    "discount_surcharge": {
                        "$ref": "#/definitions/discount_surcharge",
                        "title": "Rabatt oder Zuschlag",
                        "description": ""
                    },
                    "tax_rate": {
                        "$ref": "#/definitions/tax_rate",
                        "title": "Steuersatz",
                        "description": ""
                    }
                },
                "required": [
                    "wood_id",
                    "aggregation_type",
                    "grade",
                    "use",
                    "species",
                    "amount",
                    "article_class",
                    "product_price",
                    "tax_rate"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "wood_id": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "wood_id_type": {
                        "$ref": "#/definitions/wood_id_type",
                        "title": "Holznummerntyp",
                        "description": "Definition der angegebenen Holznummer"
                    },
                    "wood_id_no": {
                        "$ref": "#/definitions/wood_id_no",
                        "title": "Holznummer",
                        "description": "Angabe der Holzkennung"
                    }
                },
                "required": [
                    "wood_id_type",
                    "wood_id_no"
                ]
            },
            "properties": {}
        },
        "wood_id_type": {
            "enum": [
                "arb",
                "art",
                "hab",
                "hal",
                "los",
                "pol",
                "poa",
                "pog",
                "sta",
                "vlo"
            ],
            "options": {
                "enum_titles": [
                    "Arbeitsauftragsnummer",
                    "Artikelnummer",
                    "HAB-Nummer",
                    "HAB- und Los-Nummer",
                    "Los-Nummer",
                    "Polternummer",
                    "Polter-Auftragsnummer",
                    "Polter-GUID",
                    "Stammnummer",
                    "Verkaufslos-Nummer"
                ]
            },
            "type": "string"
        },
        "wood_id_no": {
            "type": "string",
            "maxLength": 30
        },
        "aggregation_type": {
            "enum": [
                "so",
                "vw",
                "ha",
                "qu",
                "sk",
                "du",
                "la",
                "soha",
                "sohaqu",
                "sohaqusk",
                "sohaquskla",
                "sohaqudu",
                "sohaqudula",
                "soqu",
                "soqusk",
                "soquskla",
                "soqudu",
                "soqudula",
                "sosk",
                "soskla",
                "sodu",
                "sodula",
                "sovwha",
                "sovwhaqu",
                "sovwhaqusk",
                "sovwqu",
                "sovwqusk",
                "sovwsk",
                "vwha",
                "vwhaqu",
                "vwhaqusk",
                "vwhaquskla",
                "vwhaqudu",
                "vwhaqudula",
                "vwsk",
                "haqu",
                "haqula",
                "haqusk",
                "haquskla",
                "haqudu",
                "haqudula",
                "hasovwqula",
                "hasovwqulask",
                "qusk",
                "pol",
                "los",
                "ein",
                "vwqu",
                "vwhask",
                "vwhaskla",
                "vwhadu",
                "vwhadula"
            ],
            "options": {
                "enum_titles": [
                    "Sorte",
                    "Verwendungssorte",
                    "Holzart",
                    "Qualität",
                    "Stärkeklasse",
                    "Durchmesser",
                    "Länge",
                    "Sorte/Holzart",
                    "Sorte/Holzart/Qualität",
                    "Sorte/Holzart/Qualität/Stärkeklasse",
                    "Sorte/Holzart/Qualität/Stärkeklasse/Länge",
                    "Sorte/Holzart/Qualität/Durchmesser",
                    "Sorte/Holzart/Qualität/Durchmesser/Länge",
                    "Sorte/Qualität",
                    "Sorte/Qualität/Stärkeklasse",
                    "Sorte/Qualität/Stärkeklasse/Länge",
                    "Sorte/Qualität/Durchmesser",
                    "Sorte/Qualität/Durchmesser/Länge",
                    "Sorte/Stärkeklasse",
                    "Sorte/Stärkeklasse/Länge",
                    "Sorte/Durchmesser",
                    "Sorte/Durchmesser/Länge",
                    "Sorte/Verwendungssorte/Holzart",
                    "Sorte/Verwendungssorte/Holzart/Qualität",
                    "Sorte/Verwendungssorte/Holzart/Qualität/Stärkeklasse",
                    "Sorte/Verwendungssorte/Qualität",
                    "Sorte/Verwendungssorte/Qualität/Stärkeklasse",
                    "Sorte/Verwendungssorte/Stärkeklasse",
                    "Verwendungssorte/Holzart",
                    "Verwendungssorte/Holzart/Qualität",
                    "Verwendungssorte/Holzart/Qualität/Stärkeklasse",
                    "Verwendungssorte/Holzart/Qualität/Stärkeklasse/Länge",
                    "Verwendungssorte/Holzart/Qualität/Durchmesser",
                    "Verwendungssorte/Holzart/Qualität/Durchmesser/Länge",
                    "Verwendungssorte/Stärkeklasse",
                    "Holzart/Qualität",
                    "Holzart/Qualität/Länge",
                    "Holzart/Qualität/Stärkeklasse",
                    "Holzart/Qualität/Stärkeklasse/Länge",
                    "Holzart/Qualität/Durchmesser",
                    "Holzart/Qualität/Durchmesser/Länge",
                    "Holzart/Sorte/Verwendungssorte/Qualität/Länge",
                    "Holzart/Sorte/Verwendungssorte/Qualität/Länge/Stärkeklasse",
                    "Qualität/Stärkeklasse",
                    "Polter",
                    "Los",
                    "Einzelstamm",
                    "Verwendungssorte/Qualität",
                    "Verwendungssorte/Holzart/Stärkeklasse",
                    "Verwendungssorte/Holzart/Stärkeklasse/Länge",
                    "Verwendungssorte/Holzart/Durchmesser",
                    "Verwendungssorte/Holzart/Durchmesser/Länge"
                ]
            },
            "type": "string"
        },
        "quality": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "qual_type": {
                        "$ref": "#/definitions/qual_type",
                        "title": "Qualitätstyp",
                        "description": "Angabe der Qualitätsklassifizierung"
                    },
                    "other_qual_type": {
                        "$ref": "#/definitions/other_qual_type",
                        "title": "Qualitätstyp Zusatz",
                        "description": "Zusätzliche Angaben zur Spezifizierung des gewählten Qualitätstyps"
                    },
                    "qual_rat": {
                        "$ref": "#/definitions/qual_rat",
                        "title": "Qualitätsanteil",
                        "description": "Angabe des Anteils der gewählten Qualität an der beschriebenen Aggregation"
                    }
                },
                "required": [
                    "qual_type",
                    "qual_rat"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "qual_type": {
            "enum": [
                "o",
                "in",
                "if",
                "ik",
                "fk",
                "nf",
                "nfk",
                "b",
                "bk",
                "c",
                "d",
                "oa",
                "bc",
                "cd",
                "bcd",
                "a_fu",
                "a_is",
                "a_if",
                "a_i2",
                "a_id",
                "a_im",
                "a_sp",
                "a_y",
                "a_x",
                "a_z",
                "a_bh",
                "ch_k",
                "ch_ab",
                "ch_bc",
                "ch_cd",
                "ch_abc",
                "ch_r",
                "ch_1",
                "ch_2",
                "ch_bk",
                "ch_sk",
                "a",
                "ak"
            ],
            "options": {
                "enum_titles": [
                    "Ohne Qualität",
                    "Normale Qualität",
                    "Fehlerhafte Qualität",
                    "Krank",
                    "Qualität fehlerhaft/krank",
                    "Qualität normal/fehlerhaft",
                    "Qualität normal/fehlerhaft/krank",
                    "Qualität B",
                    "Qualität B Rotkern",
                    "Qualität C",
                    "Qualität D",
                    "Ohne Qualitätsausscheidung",
                    "B/C Mischqualität",
                    "C/D Mischqualität",
                    "B/C/D Mischqualität",
                    "Furnierholz (ÖNORM L 2021)",
                    "Schleifholz (ÖNORM L 2021)",
                    "Faserholz (ÖNORM L 2021)",
                    "Sekunda (ÖNORM L 2021)",
                    "Industriedünnholz (ÖNORM L 2021)",
                    "Manipulationsholz (ÖNORM L 2021)",
                    "Splitterholz (ÖNORM L 2021)",
                    "Braunbloche (ÖNORM L 2021)",
                    "C-Kreuz (noch sägefähiger Ausschuss) (ÖNORM L 2021)",
                    "Ausschuss (ÖNORM L 2021)",
                    "Brennholz (ÖNORM L 2021)",
                    "Qualität Käferholz",
                    "Qualität AB",
                    "Qualität BC",
                    "Qualität CD",
                    "Qualität ABC",
                    "Qualität Rotholz",
                    "Qualität 1. Klasse",
                    "Qualität 2. Klasse",
                    "Braunkern",
                    "Spritzkern",
                    "Qualität A",
                    "Qualität A Rotkern"
                ]
            },
            "type": "string"
        },
        "other_qual_type": {
            "type": "string",
            "maxLength": 20
        },
        "qual_rat": {
            "type": "number",
            "maximum": 100
        },
        "grade": {
            "enum": [
                "xy",
                "st",
                "fl",
                "il",
                "bl",
                "bs",
                "is",
                "hs",
                "a_wh",
                "a_bl",
                "a_db",
                "a_lh",
                "a_sb",
                "a_hb",
                "a_kb",
                "a_zb",
                "ch_r",
                "ch_e",
                "ch_i"
            ],
            "options": {
                "enum_titles": [
                    "Keine",
                    "Stammholz lang",
                    "Stammholz Abschnitte",
                    "Industrieholz lang",
                    "Energieholz lang",
                    "Energieholz kurz",
                    "Industrieholz kurz",
                    "Hackschnitzel",
                    "Wertholz (ÖNORM L 2021)",
                    "Blochholz (ÖNORM L 2021)",
                    "Doppelbloch (ÖNORM L 2021)",
                    "Langholz (ÖNORM L 2021)",
                    "Schwachbloch (ÖNORM L 2021)",
                    "Hoblerbloch (ÖNORM L 2021)",
                    "Kurzbloch (ÖNORM L 2021)",
                    "Zerspanerbloch (ÖNORM L 2021)",
                    "Rundholz",
                    "Energieholz",
                    "Industrieholz"
                ]
            },
            "type": "string"
        },
        "use": {
            "enum": [
                "xy",
                "f",
                "tf",
                "ss",
                "sg",
                "wh",
                "pz",
                "sf",
                "rh",
                "hs",
                "eh",
                "ru",
                "ih",
                "p",
                "m",
                "r",
                "sw",
                "ov",
                "pa",
                "pk",
                "st",
                "osb",
                "mdf",
                "cb",
                "la",
                "bl",
                "sb",
                "vp",
                "ph",
                "sl",
                "nl",
                "gl",
                "ns",
                "au",
                "ch_sw",
                "ch_kst",
                "ch_kbu",
                "ch_z",
                "ch_p",
                "ch_h",
                "ch_hs",
                "ch_hhap",
                "ch_hheb",
                "ch_brhl",
                "ch_brhk",
                "ch_sp",
                "ch_ksp",
                "ch_ru",
                "ch_lang"
            ],
            "options": {
                "enum_titles": [
                    "Keine",
                    "Furnier",
                    "Teilfurnier",
                    "Schälholz",
                    "Sägeholz",
                    "Wertholz",
                    "Profilzerspaner",
                    "Schleifholz",
                    "Restholz",
                    "Hackschnitzel",
                    "Energieholz",
                    "Rundholz",
                    "Industrieholz",
                    "Stangen",
                    "Masten",
                    "Rammpfähle",
                    "Schwellenholz",
                    "Ohne Verwendungssorte",
                    "Palette",
                    "Parkett",
                    "Starkholz",
                    "Oriented Strand Board",
                    "Mitteldichte Faserplatte",
                    "Chipboard, Spanholz",
                    "Lamellenholz",
                    "Blochholz",
                    "Säge-, Schneide- und Bauholz",
                    "Verpackungs- und Palettenholz",
                    "Papier-, Zellstoff- und Holzwerkstoffholz",
                    "Sägefähiges Industrieholz, lang",
                    "Nutzindustrieholz, lang",
                    "Grubenlangholz",
                    "Nutz- und Grubenschichtholz",
                    "Ausschuss",
                    "Schwellen",
                    "Kleinstangen",
                    "Kleinbuchen",
                    "Zelluloseholz",
                    "Plattenholz",
                    "Holzwolleholz",
                    "Lieferform: Hackschnitzel",
                    "Lieferform: Hackholz auf Polter",
                    "Lieferform: Hackholz Einzelbaum",
                    "Lieferform: Brennholz, lang",
                    "Lieferform: Brennholz, kurz",
                    "Lieferform: Spälten",
                    "Lieferform: Kleinspälten",
                    "Lieferform: Rugel",
                    "Lieferform: Lang"
                ]
            },
            "type": "string"
        },
        "species": {
            "enum": [
                "xy",
                "ndh",
                "fi",
                "gfi",
                "ofi",
                "sfi",
                "swfi",
                "efi",
                "bfi",
                "wfi",
                "sofi",
                "kie",
                "ki",
                "bki",
                "ski",
                "rki",
                "zki",
                "wki",
                "mki",
                "gki",
                "soki",
                "ta",
                "wta",
                "ata",
                "cta",
                "kta",
                "nita",
                "nota",
                "vta",
                "sota",
                "dgl",
                "la",
                "ela",
                "jla",
                "sla",
                "sonb",
                "lb",
                "ht",
                "mam",
                "eib",
                "sz",
                "bu",
                "sei",
                "tei",
                "rei",
                "zei",
                "suei",
                "ei",
                "que",
                "es",
                "ges",
                "wes",
                "fra",
                "hbu",
                "ah",
                "bah",
                "sah",
                "fah",
                "eah",
                "siah",
                "ace",
                "li",
                "wli",
                "sli",
                "til",
                "rob",
                "akz",
                "ul",
                "bul",
                "ful",
                "flu",
                "ulm",
                "rka",
                "eka",
                "ka",
                "mau",
                "nus",
                "wnu",
                "snu",
                "jug",
                "ste",
                "pla",
                "apl",
                "solh",
                "gbi",
                "mbi",
                "bi",
                "erl",
                "ser",
                "wer",
                "ger",
                "aln",
                "pap",
                "zpa",
                "spa",
                "spah",
                "gpa",
                "wpa",
                "bpa",
                "bpah",
                "pop",
                "sor",
                "sso",
                "vb",
                "els",
                "spe",
                "meb",
                "wei",
                "swei",
                "kir",
                "gtk",
                "vk",
                "stk",
                "pru",
                "zwe",
                "hic",
                "soln",
                "fau",
                "wob",
                "wap",
                "wbi",
                "has",
                "got",
                "slbh",
                "lbh",
                "slbw",
                "str",
                "fita"
            ],
            "options": {
                "enum_titles": [
                    "Keine",
                    "Nadelholz",
                    "Fichte",
                    "Gemeine Fichte",
                    "Omorikafichte",
                    "Sitkafichte",
                    "Schwarzfichte",
                    "Engelmannsfichte",
                    "Blaufichte, Stechfichte",
                    "Weißfichte",
                    "Sonstige Fichten",
                    "Kiefer",
                    "Gemeine Kiefer",
                    "Bergkiefer",
                    "Schwarzkiefer",
                    "Rumelische Kiefer",
                    "Zirbelkiefer",
                    "Weymouthskiefer",
                    "Murraykiefer",
                    "Gelbkiefer",
                    "Sonstige Kiefer",
                    "Tanne",
                    "Weißtanne",
                    "Amerikanische Edeltanne",
                    "Coloradotanne",
                    "Küstentanne",
                    "Nikkotanne",
                    "Nordmannstanne",
                    "Veitchtanne",
                    "Sonstige Tannen",
                    "Douglasie",
                    "Lärche",
                    "Europäische Lärche",
                    "Japanische Lärche (+Hybrid)",
                    "Sonstige Lärchen",
                    "Sonstige Nadelbäume",
                    "Lebensbaum",
                    "Hemlockstanne",
                    "Mammutbaum",
                    "Eibe",
                    "Lawsonszypresse",
                    "Buche",
                    "Stieleiche",
                    "Traubeneiche",
                    "Roteiche",
                    "Zerreiche",
                    "Sumpfeiche",
                    "Eiche",
                    "sonstige Eichen",
                    "Esche",
                    "Gemeine Esche",
                    "Weißesche",
                    "Sonstige Eschen",
                    "Hainbuche (Weißbuche)",
                    "Ahorn",
                    "Bergahorn",
                    "Spitzahorn",
                    "Feldahorn",
                    "Eschenblättriger Ahorn",
                    "Silberahorn",
                    "Sonstige Ahorne",
                    "Linde",
                    "Winterlinde",
                    "Sommerlinde",
                    "Sonstige Linden",
                    "Robinie",
                    "Akazie",
                    "Ulme",
                    "Bergulme",
                    "Feldulme",
                    "Flatterulme",
                    "Sonstige Ulmen",
                    "Rosskastanie",
                    "Edelkastanie",
                    "Kastanie",
                    "Weißer Maulbeerbaum",
                    "Nussbaum",
                    "Walnuss",
                    "Schwarznuss (+Hybriden)",
                    "Sonstige Nussbäume",
                    "Stechpalme",
                    "Platane",
                    "Ahornblättrige Platane",
                    "Sonstige Laubbäume mit hoher Lebensdauer",
                    "Gemeine Birke",
                    "Moorbirke (+Karpatenbirke)",
                    "Birke",
                    "Erle",
                    "Schwarzerle",
                    "Weißerle, Grauerle",
                    "Grünerle",
                    "Sonstige Erlen",
                    "Pappel",
                    "Aspe, Zitterpappel",
                    "Europäische Schwarzpappel",
                    "Schwarzpappel Hypriden",
                    "Graupappel (+Hybriden)",
                    "Silberpappel, Weißpappel",
                    "Balsampappel",
                    "Balsampappel Hybriden",
                    "Sonstige Pappeln",
                    "Sorbusarten",
                    "Sonstige Sorbusarten",
                    "Vogelbeere",
                    "Elsbeere",
                    "Speierling",
                    "Echte Mehlbeere",
                    "Weide",
                    "Salweide",
                    "Kirsche",
                    "Gewöhnliche Traubenkirsche",
                    "Vogelkirsche",
                    "Spätblühende Traubenkirsche",
                    "Sonstige Kirschen",
                    "Zwetschge",
                    "Hickory",
                    "Sonstige Laubbäume mit niedriger Lebensdauer",
                    "Gemeiner Faulbaum, Pulverholz",
                    "Wildobst (unbestimmt)",
                    "Holzapfel, Wildapfel",
                    "Holzbirne, Wildbirne",
                    "Baumhasel",
                    "Gemeiner Götterbaum",
                    "Sonstiges Hartlaubholz",
                    "Laubholz",
                    "Sonstiges Weichlaubholz",
                    "Strauch (unbestimmt)",
                    "Mischsortiment Fichte/Tanne"
                ]
            },
            "type": "string"
        },
        "amount": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "amount_value": {
                        "$ref": "#/definitions/amount_value",
                        "title": "Mengenwert",
                        "description": "Wert der ermittelten Menge in der Aggregation"
                    },
                    "amount_unit": {
                        "$ref": "#/definitions/amount_unit",
                        "title": "Mengeneinheit",
                        "description": "Angabe der gewählten Mengeneinheit"
                    }
                },
                "required": [
                    "amount_value",
                    "amount_unit"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "amount_value": {
            "type": "number"
        },
        "amount_unit": {
            "enum": [
                "atr",
                "lut",
                "cft",
                "srm",
                "stk",
                "lfm",
                "cbm",
                "fmo",
                "rmm"
            ],
            "options": {
                "enum_titles": [
                    "Tonne atro",
                    "Tonne lutro",
                    "Kubikfuß",
                    "Schüttraummeter",
                    "Stück",
                    "Laufmeter",
                    "Kubikmeter",
                    "Festmeter ohne Rinde",
                    "Raummeter mit Rinde"
                ]
            },
            "type": "string"
        },
        "mean_length": {
            "type": "number",
            "maximum": 20
        },
        "grade_length": {
            "type": "number",
            "maximum": 20
        },
        "diameter": {
            "type": "object",
            "properties": {
                "diameter_value": {
                    "$ref": "#/definitions/diameter_value",
                    "title": "Durchmesserwert ohne Rinde",
                    "description": "Durchmesser des Einzelstammes oder mittleren Stammes in der Aggregation (cm)"
                },
                "dia_measurement": {
                    "$ref": "#/definitions/dia_measurement",
                    "title": "Durchmesserermittlung",
                    "description": "Angabe wie der Stammdurchmesser ermittelt wurde"
                },
                "bark_condition": {
                    "$ref": "#/definitions/bark_condition",
                    "title": "Rindenzustand",
                    "description": "Angabe über den Zustand der Rinde bei der Messung"
                },
                "bark_thickness": {
                    "$ref": "#/definitions/bark_thickness",
                    "title": "Rindenstärke",
                    "description": "Rindendicke bei Stammvermessung (cm)"
                },
                "dia_on_bark": {
                    "$ref": "#/definitions/dia_on_bark",
                    "title": "Durchmesser mit Rinde",
                    "description": "Stammdurchmesser, gemessen in Rinde"
                }
            }
        },
        "diameter_value": {
            "type": "number",
            "maximum": 200
        },
        "dia_measurement": {
            "enum": [
                "mara",
                "aura",
                "ohra",
                "ratv",
                "ratn",
                "umit",
                "inri",
                "ohri"
            ],
            "options": {
                "enum_titles": [
                    "Manueller Rindenabzug",
                    "Automatischer Rindenabzug",
                    "Ohne Rindenabzug",
                    "Rindenabzugstabelle vor dem Rücken gemessen",
                    "Rindenabzugstabelle nach dem Rücken gemessen",
                    "Unentrindet mit Mittenring",
                    "Gemessen in Rinde",
                    "Gemessen ohne Rinde"
                ]
            },
            "type": "string"
        },
        "bark_condition": {
            "enum": [
                "edr",
                "ent",
                "gst",
                "hae",
                "mae",
                "ten",
                "ube",
                "uen",
                "umi"
            ],
            "options": {
                "enum_titles": [
                    "entrindet durch Dritte",
                    "entrindet",
                    "gestreift",
                    "handentrindet",
                    "maschinenentrindet",
                    "teilentrindet",
                    "unbekannt",
                    "unentrindet",
                    "unentrindet mit Mittenring"
                ]
            },
            "type": "string"
        },
        "bark_thickness": {
            "type": "number",
            "maximum": 10
        },
        "dia_on_bark": {
            "type": "number",
            "maximum": 200
        },
        "thickness_class": {
            "enum": [
                "o",
                "ch_1a",
                "ch_1b",
                "ch_2a",
                "ch_2b",
                "ch_3a",
                "ch_3b",
                "ch_4a",
                "ch_4b",
                "ch_4",
                "ch_5",
                "ch_5a",
                "ch_5b",
                "ch_6",
                "ch_6a",
                "ch_6b",
                "d0",
                "d1",
                "d1a",
                "d1b",
                "d2",
                "d2a",
                "d2b",
                "d3",
                "d3a",
                "d3b",
                "d4",
                "d4a",
                "d4b",
                "d5",
                "d5a",
                "d5b",
                "d6",
                "d6a",
                "d6b",
                "d7",
                "d8"
            ],
            "options": {
                "enum_titles": [
                    "Ohne Stärke",
                    "Stärke: 1a (10-14 cm)",
                    "Stärke: 1b (15-19 cm), Zopf 14 cm",
                    "Stärke: 2a (20-24 cm), Zopf 18 cm",
                    "Stärke: 2b (25-29 cm), Zopf 18 cm",
                    "Stärke: 3a (30-34 cm), Zopf 18 cm",
                    "Stärke: 3b (35-39 cm), Zopf 18 cm",
                    "Stärke: 4a (40-44 cm), Zopf 22 cm",
                    "Stärke: 4b (45-49 cm), Zopf 22 cm",
                    "Stärke: 4 (40-49 cm), Zopf 22 cm",
                    "Stärke: 5 (50-59 cm), Zopf 22 cm",
                    "Stärke: 5a (50-54 cm), Zopf 22 cm",
                    "Stärke: 5b (55-59 cm), Zopf 22 cm",
                    "Stärke: 6 (60-69 cm), Zopf 22 cm",
                    "Stärke: 6a (60-64 cm), Zopf 22 cm",
                    "Stärke: 6b (65-69 cm), Zopf 22 cm",
                    "Mittenstärke 0-9 cm",
                    "Mittenstärke 10-19 cm",
                    "Mittenstärke 10-14 cm",
                    "Mittenstärke 15-19 cm",
                    "Mittenstärke 20-29 cm",
                    "Mittenstärke 20-24 cm",
                    "Mittenstärke 25-29 cm",
                    "Mittenstärke 30-39 cm",
                    "Mittenstärke 30-34 cm",
                    "Mittenstärke 35-39 cm",
                    "Mittenstärke 40-49 cm",
                    "Mittenstärke 40-44 cm",
                    "Mittenstärke 45-49 cm",
                    "Mittenstärke 50-59 cm",
                    "Mittenstärke 50-54 cm",
                    "Mittenstärke 55-59 cm",
                    "Mittenstärke 60-69 cm",
                    "Mittenstärke 60-64 cm",
                    "Mittenstärke 65-69 cm",
                    "Mittenstärke 70-79 cm",
                    "Mittenstärke ≥80 cm"
                ]
            },
            "type": "string"
        },
        "wood_certification": {
            "type": "object",
            "properties": {
                "wood_origin": {
                    "$ref": "#/definitions/wood_origin",
                    "title": "Holzherkunft",
                    "description": ""
                },
                "wood_certificat": {
                    "$ref": "#/definitions/wood_certificat",
                    "title": "Holzzertifikat",
                    "description": ""
                }
            },
            "required": [
                "wood_origin"
            ]
        },
        "wood_origin": {
            "type": "object",
            "properties": {
                "state": {
                    "$ref": "#/definitions/state",
                    "title": "Staat",
                    "description": ""
                },
                "state_subdivision": {
                    "$ref": "#/definitions/state_subdivision",
                    "title": "Region",
                    "description": " Für manche Länder ist die Angabe der Herkunftsregion notwendig"
                }
            },
            "required": [
                "state"
            ]
        },
        "state_subdivision": {
            "type": "string",
            "pattern": "^[A-Z]{2}\\-[A-Z0-9]{2,3}$"
        },
        "wood_certificat": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "wood_certificat_type": {
                        "$ref": "#/definitions/wood_certificat_type",
                        "title": "Zertifikatstyp",
                        "description": "Art der vorliegenden Zertifizierung zum Holz"
                    },
                    "wood_certificat_ratio": {
                        "$ref": "#/definitions/wood_certificat_ratio",
                        "title": "Anteil zertifiziertes Holz",
                        "description": "Gibt den Anteil des zertifizierten Holzes an"
                    },
                    "wood_certificat_id": {
                        "$ref": "#/definitions/wood_certificat_id",
                        "title": "Zertifikatsnummer",
                        "description": "Eindeutige Kennung des Zertifikates"
                    }
                },
                "required": [
                    "wood_certificat_type",
                    "wood_certificat_ratio",
                    "wood_certificat_id"
                ]
            },
            "properties": {}
        },
        "wood_certificat_type": {
            "enum": [
                "xy",
                "pefc",
                "pecs",
                "fsc",
                "fscm",
                "fscc",
                "fscw",
                "natl",
                "iso0",
                "iso1",
                "iso2",
                "iso3",
                "iso4",
                "oeko",
                "ral",
                "qlab"
            ],
            "options": {
                "enum_titles": [
                    "Keine",
                    "PEFC zertifiziert",
                    "PEFC Controlled Sources",
                    "FSC 100 % zertifiziert",
                    "FSC Mix zertifiziert",
                    "FSC Credit zertifiziert",
                    "FSC Controlled Wood",
                    "Naturland",
                    "DIN EN ISO 9000",
                    "DIN EN ISO 9001",
                    "DIN EN ISO 9002",
                    "DIN EN ISO 9003",
                    "DIN EN ISO 14000",
                    "Öko Audit",
                    "RAL Gütegemeinschaft",
                    "Q-Label"
                ]
            },
            "type": "string"
        },
        "wood_certificat_ratio": {
            "type": "number",
            "maximum": 100
        },
        "wood_certificat_id": {
            "type": "string",
            "maxLength": 30
        },
        "article_class": {
            "enum": [
                "dei",
                "den",
                "dlo",
                "dru",
                "dso",
                "dsp",
                "dve",
                "hol",
                "pro"
            ],
            "options": {
                "enum_titles": [
                    "Dienstleistung Einschlag",
                    "Dienstleistung Entrindung",
                    "Dienstleistung Logistik",
                    "Dienstleistung Rücken",
                    "Dienstleistung sonstige",
                    "Dienstleistung Spritzen",
                    "Dienstleistung Vermessung",
                    "Holz",
                    "Provision"
                ]
            },
            "type": "string"
        },
        "article_type": {
            "type": "string",
            "maxLength": 30
        },
        "invoice_item_text": {
            "type": "string",
            "maxLength": 255
        },
        "attribute": {
            "enum": [
                "lmi",
                "lma",
                "dmi",
                "dma",
                "lbe",
                "dmd",
                "sma",
                "smi",
                "zmi",
                "zma",
                "ama",
                "kma",
                "nsf",
                "oma",
                "spl"
            ],
            "options": {
                "enum_titles": [
                    "Länge < Minimalwert",
                    "Länge > Maximalwert",
                    "Durchmesser < Minimaldurchmesser",
                    "Durchmesser > Maximaldurchmesser",
                    "Länge < Bestelllänge ≥ Mindestlänge",
                    "Durchmesser < Mindestmittendurchmesser",
                    "Stammfußdurchmesser > Maximaldurchmesser",
                    "Stammfußdurchmesser < Minimaldurchmesser",
                    "Zopfdurchmesser < Mindestzopfdurchmesser",
                    "Zopfdurchmesser > Maximalzopfdurchmesser",
                    "Abholzigkeit > zulässige Abholzigkeit",
                    "Krümmung > zulässige Krümmung",
                    "Nicht Sägefähig",
                    "Ovalität > zulässige Ovalität",
                    "Splitter"
                ]
            },
            "type": "string"
        },
        "product_price": {
            "type": "object",
            "properties": {
                "product_price_value": {
                    "$ref": "#/definitions/product_price_value",
                    "title": "Preis der Rechnungsposition",
                    "description": "Zahlungsbetrag zur Rechnungsposition"
                },
                "product_price_unit": {
                    "$ref": "#/definitions/product_price_unit",
                    "title": "Preiseinheit",
                    "description": "Angabe wie der Rechnungspreis erhoben wird"
                },
                "det_base": {
                    "$ref": "#/definitions/det_base",
                    "title": "Bemessungsgrundlage",
                    "description": "Einheitsangabe, falls Preis pro Einheit"
                },
                "product_item_price": {
                    "$ref": "#/definitions/product_item_price",
                    "title": "Einzelpositionspreis",
                    "description": "Preis eines Einzelstückes aus der Rechnungsposition"
                }
            },
            "required": [
                "product_price_value",
                "product_price_unit",
                "product_item_price"
            ]
        },
        "product_price_value": {
            "type": "number"
        },
        "product_price_unit": {
            "enum": [
                "bei",
                "bet",
                "pro"
            ],
            "options": {
                "enum_titles": [
                    "Betrag je Einheit",
                    "Absolutbetrag",
                    "Prozent"
                ]
            },
            "type": "string"
        },
        "product_item_price": {
            "type": "number"
        },
        "tax_rate": {
            "type": "object",
            "properties": {
                "tax_rate_value": {
                    "$ref": "#/definitions/tax_rate_value",
                    "title": "Steuerbetrag",
                    "description": "Höhe des zu zahlenden Steuersatzes"
                },
                "tax_rate_percent": {
                    "$ref": "#/definitions/tax_rate_percent",
                    "title": "Steuerprozent",
                    "description": "Angesetzter Prozentsatz zur Steuererfüllung"
                },
                "tax_rate_text": {
                    "$ref": "#/definitions/tax_rate_text",
                    "title": "Bemerkungen",
                    "description": "Freie Texteingabe zum angesetzten Steuersatz"
                }
            },
            "required": [
                "tax_rate_percent",
                "tax_rate_text"
            ]
        },
        "tax_rate_value": {
            "type": "number"
        },
        "tax_rate_percent": {
            "type": "number",
            "maximum": 100
        },
        "tax_rate_text": {
            "type": "string",
            "maxLength": 255
        },
        "status": {
            "type": "object",
            "properties": {
                "creation_datetime": {
                    "$ref": "#/definitions/creation_datetime",
                    "title": "Erstelldatum und -zeit",
                    "description": "Angabe des Datums, und gegebenenfalls der Uhrzeit, zu dem der Status erstellt wird"
                },
                "statusid": {
                    "$ref": "#/definitions/statusid",
                    "title": "Status-ID",
                    "description": "Eindeutige Kennung der Statusaussage"
                },
                "additionalinformation": {
                    "$ref": "#/definitions/additionalinformation",
                    "title": "Zusatzinformationen",
                    "description": "Freie Texteingabe für Informationen zum Status"
                },
                "coordinate": {
                    "$ref": "#/definitions/coordinate",
                    "title": "Koordinaten",
                    "description": ""
                }
            }
        },
        "creation_datetime": {
            "type": "string",
            "format": "date-time"
        },
        "statusid": {
            "enum": [
                "10",
                "20",
                "30",
                "40",
                "50",
                "60",
                "70",
                "80",
                "90",
                "100",
                "110",
                "120",
                "130",
                "140",
                "150"
            ],
            "options": {
                "enum_titles": [
                    "Erstellt",
                    "Geändert",
                    "Storniert",
                    "Gesendet",
                    "Angenommen",
                    "Abgelehnt",
                    "Disponiert",
                    "Auftragsbeginn",
                    "Unterbrochen",
                    "Abgebrochen",
                    "Fahre ins Revier",
                    "Lieferschein erstellt",
                    "Verlasse Revier",
                    "Am Lieferort angekommen",
                    "Auftragsende"
                ]
            },
            "type": "string",
            "default": "10"
        },
        "additionalinformation": {
            "type": "string",
            "maxLength": 255
        },
        "delivery_note": {
            "type": "object",
            "required": [
                "transfer_address",
                "transfer",
                "origin"
            ],
            "properties": {
                "transfer_address": {
                    "$ref": "#/definitions/transfer_address",
                    "title": "Transportadressen",
                    "description": ""
                },
                "transfer": {
                    "$ref": "#/definitions/transfer",
                    "title": "Transport",
                    "description": ""
                },
                "origin": {
                    "$ref": "#/definitions/origin",
                    "title": "Ursprung",
                    "description": ""
                },
                "status": {
                    "$ref": "#/definitions/status",
                    "title": "Status",
                    "description": ""
                }
            }
        },
        "transfer_address": {
            "type": "object",
            "properties": {
                "transfer_employer": {
                    "$ref": "#/definitions/transfer_employer",
                    "title": "Transportauftraggeber",
                    "description": ""
                },
                "loading_location": {
                    "$ref": "#/definitions/loading_location",
                    "title": "Ladestelle",
                    "description": ""
                },
                "unloading_location": {
                    "$ref": "#/definitions/unloading_location",
                    "title": "Entladestelle",
                    "description": ""
                },
                "shipper": {
                    "$ref": "#/definitions/shipper",
                    "title": "Spediteur",
                    "description": ""
                }
            },
            "required": [
                "transfer_employer",
                "loading_location",
                "unloading_location",
                "shipper"
            ]
        },
        "transfer_employer": {
            "type": "object",
            "properties": {
                "business": {
                    "$ref": "#/definitions/business",
                    "title": "Betrieb",
                    "description": ""
                },
                "contact": {
                    "$ref": "#/definitions/contact",
                    "title": "Kontakt",
                    "description": ""
                }
            },
            "required": [
                "business",
                "contact"
            ]
        },
        "loading_location": {
            "type": "object",
            "properties": {
                "location_type": {
                    "$ref": "#/definitions/location_type",
                    "title": "Stellentyp",
                    "description": "Zur näheren Typisierung der Stelle"
                },
                "location": {
                    "$ref": "#/definitions/location",
                    "title": "Stelle",
                    "description": ""
                },
                "other_contact": {
                    "$ref": "#/definitions/other_contact",
                    "title": "Weiterer Kontakt",
                    "description": ""
                }
            },
            "required": [
                "other_contact"
            ]
        },
        "location_type": {
            "enum": [
                "pol",
                "wal",
                "bhf",
                "wag",
                "haf",
                "sch",
                "wer",
                "wzw",
                "wva"
            ],
            "options": {
                "enum_titles": [
                    "Polter",
                    "Waldlager",
                    "Bahnhof",
                    "Waggon",
                    "Hafen",
                    "Schiff",
                    "Werk",
                    "Werk Zwischenlager",
                    "Werk Vermessungsanlage"
                ]
            },
            "type": "string"
        },
        "location": {
            "type": "object",
            "properties": {
                "location_data": {
                    "$ref": "#/definitions/location_data",
                    "title": "Stellendaten",
                    "description": ""
                },
                "location_tax": {
                    "$ref": "#/definitions/location_tax",
                    "title": "Besteuerung Stelle",
                    "description": ""
                }
            }
        },
        "location_data": {
            "type": "object",
            "properties": {
                "location_name": {
                    "$ref": "#/definitions/location_name",
                    "title": "Name",
                    "description": ""
                },
                "location_street": {
                    "$ref": "#/definitions/location_street",
                    "title": "Straße und Hausnummer",
                    "description": ""
                },
                "location_postcode": {
                    "$ref": "#/definitions/location_postcode",
                    "title": "Postleitzahl",
                    "description": ""
                },
                "location_city": {
                    "$ref": "#/definitions/location_city",
                    "title": "Stadt",
                    "description": ""
                },
                "location_state": {
                    "$ref": "#/definitions/location_state",
                    "title": "Staat",
                    "description": ""
                },
                "certification": {
                    "$ref": "#/definitions/certification",
                    "title": "Zertifizierung",
                    "description": ""
                },
                "forestry": {
                    "$ref": "#/definitions/forestry",
                    "title": "Forstorganisation",
                    "description": ""
                },
                "bank_data": {
                    "$ref": "#/definitions/bank_data",
                    "title": "Bankdaten",
                    "description": ""
                },
                "process": {
                    "$ref": "#/definitions/process",
                    "title": "Vorgang",
                    "description": ""
                },
                "coordinate": {
                    "$ref": "#/definitions/coordinate",
                    "title": "Koordinaten",
                    "description": ""
                }
            }
        },
        "location_name": {
            "type": "string",
            "maxLength": 100
        },
        "location_street": {
            "type": "string",
            "maxLength": 100
        },
        "location_postcode": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z]{3,10}$"
        },
        "location_city": {
            "type": "string",
            "maxLength": 100
        },
        "location_state": {
            "enum": [
                "DE",
                "BY",
                "BE",
                "BG",
                "DK",
                "EE",
                "FI",
                "FR",
                "GE",
                "GR",
                "IE",
                "IS",
                "IT",
                "CA",
                "HR",
                "LV",
                "LI",
                "LT",
                "LU",
                "NL",
                "NO",
                "AT",
                "PL",
                "PT",
                "RO",
                "RU",
                "SE",
                "CH",
                "RS",
                "SK",
                "SI",
                "ES",
                "CZ",
                "UA",
                "HU",
                "US",
                "GB",
                "CX"
            ],
            "options": {
                "enum_titles": [
                    "Deutschland",
                    "Belarus",
                    "Belgien",
                    "Bulgarien",
                    "Dänemark",
                    "Estland",
                    "Finnland",
                    "Frankreich",
                    "Georgien",
                    "Griechenland",
                    "Irland",
                    "Island",
                    "Italien",
                    "Kanada",
                    "Kroatien",
                    "Lettland",
                    "Liechtenstein",
                    "Litauen",
                    "Luxemburg",
                    "Niederlande",
                    "Norwegen",
                    "Österreich",
                    "Polen",
                    "Portugal",
                    "Rumänien",
                    "Russische Föderation",
                    "Schweden",
                    "Schweiz",
                    "Serbien",
                    "Slowakei",
                    "Slowenien",
                    "Spanien",
                    "Tschechien",
                    "Ukraine",
                    "Ungarn",
                    "Vereinigte Staaten von Amerika",
                    "Vereinigtes Königreich Großbritannien und Nordirland",
                    "Weihnachtsinseln"
                ]
            },
            "type": "string"
        },
        "location_tax": {
            "type": "object",
            "properties": {
                "tax_type": {
                    "$ref": "#/definitions/tax_type",
                    "title": "Besteuerung",
                    "description": "Angabe zu Regel- oder Pauschalbesteuerung"
                },
                "tax_no_type": {
                    "$ref": "#/definitions/tax_no_type",
                    "title": "Steuernummerntyp",
                    "description": "Umsatzsteuer-ID oder Steuernummer"
                },
                "tax_no": {
                    "$ref": "#/definitions/tax_no",
                    "title": "Steuernummer",
                    "description": "Angabe der Umsatzsteuer-ID oder Steuernummer"
                }
            },
            "required": [
                "tax_no_type",
                "tax_no"
            ]
        },
        "other_contact": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "other_contact_role": {
                        "$ref": "#/definitions/other_contact_role",
                        "title": "Rolle des Kontaktes",
                        "description": "Angabe zur Funktion des Kontaktes"
                    },
                    "other_contact_name": {
                        "$ref": "#/definitions/other_contact_name",
                        "title": "Vorname",
                        "description": ""
                    },
                    "other_contact_surname": {
                        "$ref": "#/definitions/other_contact_surname",
                        "title": "Nachname",
                        "description": ""
                    },
                    "other_contact_telephone": {
                        "$ref": "#/definitions/other_contact_telephone",
                        "title": "Telefonnummer",
                        "description": ""
                    },
                    "other_contact_email": {
                        "$ref": "#/definitions/other_contact_email",
                        "title": "E-Mailadresse",
                        "description": ""
                    }
                },
                "required": [
                    "other_contact_role"
                ]
            },
            "properties": {}
        },
        "other_contact_role": {
            "type": "string",
            "maxLength": 100
        },
        "other_contact_name": {
            "type": "string",
            "maxLength": 100
        },
        "other_contact_surname": {
            "type": "string",
            "maxLength": 100
        },
        "other_contact_telephone": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^\\+?[0-9 /-]{5,20}$"
            }
        },
        "other_contact_email": {
            "type": "string",
            "pattern": "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
        },
        "unloading_location": {
            "type": "object",
            "properties": {
                "location_type": {
                    "$ref": "#/definitions/location_type",
                    "title": "Stellentyp",
                    "description": "Zur näheren Typisierung der Stelle"
                },
                "location": {
                    "$ref": "#/definitions/location",
                    "title": "Stelle",
                    "description": ""
                },
                "other_contact": {
                    "$ref": "#/definitions/other_contact",
                    "title": "Weiterer Kontakt",
                    "description": ""
                }
            },
            "required": [
                "other_contact"
            ]
        },
        "shipper": {
            "type": "object",
            "properties": {
                "business": {
                    "$ref": "#/definitions/business",
                    "title": "Betrieb",
                    "description": ""
                },
                "contact": {
                    "$ref": "#/definitions/contact",
                    "title": "Kontakt",
                    "description": ""
                }
            },
            "required": [
                "business",
                "contact"
            ]
        },
        "transfer": {
            "type": "object",
            "properties": {
                "delivery": {
                    "$ref": "#/definitions/delivery",
                    "title": "Lieferung",
                    "description": ""
                },
                "haulier": {
                    "$ref": "#/definitions/haulier",
                    "title": "Frächter",
                    "description": ""
                },
                "haul_means": {
                    "$ref": "#/definitions/haul_means",
                    "title": "Transportmittel",
                    "description": ""
                }
            },
            "required": [
                "delivery",
                "haulier",
                "haul_means"
            ]
        },
        "delivery": {
            "type": "object",
            "properties": {
                "delivery_no": {
                    "$ref": "#/definitions/delivery_no",
                    "title": "Lieferscheinnummer",
                    "description": "Eindeutige Kennung des Lieferscheines als Referenz"
                },
                "signature": {
                    "$ref": "#/definitions/signature",
                    "title": "Unterschrift",
                    "description": ""
                }
            },
            "required": [
                "delivery_no"
            ]
        },
        "delivery_no": {
            "type": "string",
            "maxLength": 30
        },
        "signature": {
            "type": "string"
        },
        "haulier": {
            "type": "object",
            "properties": {
                "haulier_name": {
                    "$ref": "#/definitions/haulier_name",
                    "title": "Vorname",
                    "description": "Vorname des Frächters"
                },
                "haulier_surname": {
                    "$ref": "#/definitions/haulier_surname",
                    "title": "Nachname",
                    "description": "Nachname des Frächters"
                },
                "haulier_telephone": {
                    "$ref": "#/definitions/haulier_telephone",
                    "title": "Telefonnummer",
                    "description": "Telefonnummer des Frächters"
                },
                "haulier_email": {
                    "$ref": "#/definitions/haulier_email",
                    "title": "E-Mailadresse",
                    "description": "E-Mailadresse des Frächters"
                }
            },
            "required": [
                "haulier_surname"
            ]
        },
        "haulier_name": {
            "type": "string",
            "maxLength": 100
        },
        "haulier_surname": {
            "type": "string",
            "maxLength": 100
        },
        "haulier_telephone": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^\\+?[0-9 /-]{5,20}$"
            }
        },
        "haulier_email": {
            "type": "string",
            "pattern": "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
        },
        "haul_means": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "haul_means_no": {
                        "$ref": "#/definitions/haul_means_no",
                        "title": "Nummer des Transportmittels",
                        "description": "KFZ-Kennzeichen oder Waggon-Kennung des aufnehmenden Transportmittels"
                    },
                    "amount": {
                        "$ref": "#/definitions/amount",
                        "title": "Menge",
                        "description": ""
                    },
                    "haul_text": {
                        "$ref": "#/definitions/haul_text",
                        "title": "Bemerkungen",
                        "description": "Freie Texteingaben zum Transportmittel"
                    }
                },
                "required": [
                    "haul_means_no",
                    "amount"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "haul_means_no": {
            "type": "string",
            "maxLength": 30
        },
        "haul_text": {
            "type": "string",
            "maxLength": 255
        },
        "origin": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "load": {
                        "$ref": "#/definitions/load",
                        "title": "Aufladung",
                        "description": ""
                    },
                    "pile_data": {
                        "$ref": "#/definitions/pile_data",
                        "title": "Polterdaten",
                        "description": ""
                    }
                },
                "required": [
                    "load",
                    "pile_data"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "load": {
            "type": "object",
            "properties": {
                "loading_time": {
                    "$ref": "#/definitions/loading_time",
                    "title": "Aufladezeitpunkt",
                    "description": "Uhrzeit und Datum zu dem das Holz aufgeladen wird"
                },
                "estimated_amount": {
                    "$ref": "#/definitions/estimated_amount",
                    "title": "Geschätzte_Aufladung",
                    "description": ""
                },
                "residual_amount": {
                    "$ref": "#/definitions/residual_amount",
                    "title": "Restmenge",
                    "description": ""
                }
            },
            "required": [
                "estimated_amount"
            ]
        },
        "loading_time": {
            "type": "string",
            "format": "date-time"
        },
        "estimated_amount": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "amount": {
                        "$ref": "#/definitions/amount",
                        "title": "Menge",
                        "description": ""
                    }
                },
                "required": [
                    "amount"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "residual_amount": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "amount": {
                        "$ref": "#/definitions/amount",
                        "title": "Menge",
                        "description": ""
                    }
                },
                "required": [
                    "amount"
                ]
            },
            "properties": {}
        },
        "pile_data": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "wood_id": {
                        "$ref": "#/definitions/wood_id",
                        "title": "Holznummer",
                        "description": ""
                    },
                    "product_data": {
                        "$ref": "#/definitions/product_data",
                        "title": "Produktdaten",
                        "description": ""
                    },
                    "pile_preservation": {
                        "$ref": "#/definitions/pile_preservation",
                        "title": "Holzschutz",
                        "description": "Angabe ob das Polter mit Schutzmittel behandelt ist"
                    },
                    "pile_text": {
                        "$ref": "#/definitions/pile_text",
                        "title": "Polterbemerkung",
                        "description": "Weitere Bemerkungen zum beschriebenen Polter"
                    },
                    "coordinate": {
                        "$ref": "#/definitions/coordinate",
                        "title": "Koordinaten",
                        "description": ""
                    },
                    "other_file": {
                        "$ref": "#/definitions/other_file",
                        "title": "Dateianhang",
                        "description": ""
                    }
                },
                "required": [
                    "wood_id",
                    "product_data",
                    "coordinate"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "product_data": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "aggregation_type": {
                        "$ref": "#/definitions/aggregation_type",
                        "title": "Aggregationstyp",
                        "description": "Kriterium nach dem Aggregiert wurde"
                    },
                    "wood_id": {
                        "$ref": "#/definitions/wood_id",
                        "title": "Holznummer",
                        "description": ""
                    },
                    "wood_definition": {
                        "$ref": "#/definitions/wood_definition",
                        "title": "Holzdefinition",
                        "description": ""
                    },
                    "part_no": {
                        "$ref": "#/definitions/part_no",
                        "title": "Stammabschnittsnummer",
                        "description": "Nummerierung des Klammerstammstückes (1 = Erdstammstück, 2 = erstes Folgestück, etc.)"
                    },
                    "mean_length": {
                        "$ref": "#/definitions/mean_length",
                        "title": "Mittlere Länge",
                        "description": "(Mittlere) Länge des Holzes in der Aggregation"
                    },
                    "diameter": {
                        "$ref": "#/definitions/diameter",
                        "title": "Durchmesser",
                        "description": ""
                    },
                    "thickness_class": {
                        "$ref": "#/definitions/thickness_class",
                        "title": "Stärkeklasse",
                        "description": "Klassifizierung der mittleren Stammstärke"
                    },
                    "quality_attribute": {
                        "$ref": "#/definitions/quality_attribute",
                        "title": "Qualitätsmerkmal",
                        "description": "Angabe möglicher qualitätsrelevanter Merkmale"
                    },
                    "vat_rate": {
                        "$ref": "#/definitions/vat_rate",
                        "title": "Mehrwertsteuersatz",
                        "description": "Mehrwertsteuersatz auf das beschriebene Holzprodukt"
                    }
                },
                "required": [
                    "aggregation_type",
                    "wood_definition"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "wood_definition": {
            "type": "object",
            "properties": {
                "quality": {
                    "$ref": "#/definitions/quality",
                    "title": "Qualität",
                    "description": ""
                },
                "grade": {
                    "$ref": "#/definitions/grade",
                    "title": "Sorte",
                    "description": "Angabe zur Holzsortierung"
                },
                "use": {
                    "$ref": "#/definitions/use",
                    "title": "Verwendungssorte",
                    "description": "Angabe zur Verwendungssorte des Holzes"
                },
                "species": {
                    "$ref": "#/definitions/species",
                    "title": "Holzart",
                    "description": "Angabe zur Holzart"
                },
                "amount": {
                    "$ref": "#/definitions/amount",
                    "title": "Menge",
                    "description": ""
                }
            },
            "required": [
                "quality",
                "grade",
                "use",
                "species",
                "amount"
            ]
        },
        "part_no": {
            "type": "number",
            "maximum": 10
        },
        "quality_attribute": {
            "additionalItems": false,
            "type": "array",
            "items": {
                "enum": [
                    "ab",
                    "bk",
                    "bl",
                    "bo",
                    "fs",
                    "hw",
                    "hz",
                    "in",
                    "li",
                    "nk",
                    "nw",
                    "os",
                    "pi",
                    "rf",
                    "ri",
                    "rk",
                    "rk1",
                    "rk2",
                    "rk3",
                    "rk4",
                    "rs",
                    "sb",
                    "sf",
                    "sk",
                    "so",
                    "sp",
                    "s1",
                    "s2",
                    "s3",
                    "sv",
                    "ss",
                    "tk"
                ],
                "options": {
                    "enum_titles": [
                        "abiotische Schäden",
                        "Borkenkäferbefall",
                        "Bläue",
                        "Bockkäferbefall",
                        "Schälschaden durch Wild",
                        "Holzwespenbefall",
                        "Harznutzung",
                        "Schaden durch Insekten",
                        "Lineatusbefall",
                        "Nasskern",
                        "Neuartige Waldschäden",
                        "ohne Schaden",
                        "Pilzbefall",
                        "Rotfäule",
                        "Ringschäle",
                        "Rotkern",
                        "Rotkern <12cm",
                        "Rotkern <1/3",
                        "Rotkern <1/2",
                        "Rotkern >1/2",
                        "Rotstreife",
                        "Schnee-, Eis- und Duftbruch",
                        "Schleimfluss",
                        "Spritzkern",
                        "Sonstige Schäden",
                        "Splitter",
                        "leichte Besplitterung",
                        "mäßige Besplitterung",
                        "starke Besplitterung",
                        "Splitterverdacht",
                        "Sturmschäden",
                        "Trocknis"
                    ]
                },
                "type": "string"
            }
        },
        "vat_rate": {
            "type": "number",
            "maximum": 100
        },
        "pile_preservation": {
            "type": "boolean"
        },
        "pile_text": {
            "type": "string",
            "maxLength": 255
        },
        "other_file": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "path": {
                        "$ref": "#/definitions/path",
                        "title": "Link",
                        "description": "Pfad unter dem die externe Datei zu finden ist"
                    },
                    "file_text": {
                        "$ref": "#/definitions/file_text",
                        "title": "Bemerkungen zur externen Datei",
                        "description": "Weitere Informationen die die externe Datei beschreiben"
                    }
                },
                "required": [
                    "path",
                    "file_text"
                ]
            },
            "properties": {}
        },
        "path": {
            "type": "string",
            "maxLength": 2048,
            "pattern": "https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]\\.[^\\s]{2,}"
        },
        "file_text": {
            "type": "string",
            "maxLength": 255
        },
        "measurement_journal": {
            "type": "object",
            "required": [
                "other_address",
                "measurement_data"
            ],
            "properties": {
                "other_address": {
                    "$ref": "#/definitions/other_address",
                    "title": "Weitere Adressen",
                    "description": ""
                },
                "measurement_data": {
                    "$ref": "#/definitions/measurement_data",
                    "title": "Vermessungs-Kopfdaten",
                    "description": ""
                },
                "status": {
                    "$ref": "#/definitions/status",
                    "title": "Status",
                    "description": ""
                }
            }
        },
        "other_address": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "other_business": {
                        "$ref": "#/definitions/other_business",
                        "title": "Weiterer Betrieb",
                        "description": ""
                    },
                    "other_contact": {
                        "$ref": "#/definitions/other_contact",
                        "title": "Weiterer Kontakt",
                        "description": ""
                    }
                },
                "required": [
                    "other_business"
                ]
            },
            "properties": {}
        },
        "other_business": {
            "type": "object",
            "properties": {
                "role_business": {
                    "$ref": "#/definitions/role_business",
                    "title": "Rolle des Betriebes",
                    "description": "Beschreibt die Funktion des weiteren Betriebes"
                },
                "business_data": {
                    "$ref": "#/definitions/business_data",
                    "title": "Betriebsdaten",
                    "description": ""
                },
                "tax": {
                    "$ref": "#/definitions/tax",
                    "title": "Besteuerung",
                    "description": ""
                }
            },
            "required": [
                "role_business",
                "business_data"
            ]
        },
        "role_business": {
            "enum": [
                "abn",
                "ent",
                "hol",
                "lad",
                "lie",
                "spe",
                "tra",
                "ver",
                "hoh",
                "hka"
            ],
            "options": {
                "enum_titles": [
                    "Abnehmer",
                    "Entladestelle",
                    "Holzbesitzer",
                    "Ladestelle",
                    "Lieferant",
                    "Spediteur",
                    "Transportauftraggeber",
                    "Vermessungsfirma",
                    "Holzhändler",
                    "Holzkäufer"
                ]
            },
            "type": "string"
        },
        "measurement_data": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "measurer": {
                        "$ref": "#/definitions/measurer",
                        "title": "Vermesser",
                        "description": ""
                    },
                    "wood_id": {
                        "$ref": "#/definitions/wood_id",
                        "title": "Holznummer",
                        "description": ""
                    },
                    "measurement_method": {
                        "$ref": "#/definitions/measurement_method",
                        "title": "Abrechnungsrelevantes Vermessungsverfahren",
                        "description": "Angabe des Vermessungsverfahrens nach dem abgerechnet wird"
                    },
                    "screening_valid_to": {
                        "$ref": "#/definitions/screening_valid_to",
                        "title": "Forst-Sortierprüfung gültig bis",
                        "description": "Datum bis zu dem die forstliche Sortierprüfung des Gerätes gültig ist"
                    },
                    "calibration_id": {
                        "$ref": "#/definitions/calibration_id",
                        "title": "Eich-ID",
                        "description": "ID zur Überprüfung der Eichung"
                    },
                    "calibrated_until": {
                        "$ref": "#/definitions/calibrated_until",
                        "title": "Eichung gültig bis",
                        "description": "Datum bis zu dem das Gerät geeicht ist"
                    },
                    "measuring_medium": {
                        "$ref": "#/definitions/measuring_medium",
                        "title": "Vermessungsart",
                        "description": "Verfahren das zur Vermessung verwendet wurde (gegebenenfalls nicht abrechnungsrelevant)"
                    },
                    "measurement": {
                        "$ref": "#/definitions/measurement",
                        "title": "Vermessung",
                        "description": ""
                    }
                },
                "required": [
                    "measurer",
                    "measurement_method",
                    "calibration_id",
                    "calibrated_until",
                    "measuring_medium",
                    "measurement"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "measurer": {
            "type": "object",
            "properties": {
                "business": {
                    "$ref": "#/definitions/business",
                    "title": "Betrieb",
                    "description": ""
                },
                "contact": {
                    "$ref": "#/definitions/contact",
                    "title": "Kontakt",
                    "description": ""
                }
            }
        },
        "measurement_method": {
            "enum": [
                "mit",
                "mis",
                "arm",
                "srm",
                "krm",
                "stf",
                "zae",
                "stz",
                "wev",
                "gwm",
                "gwa",
                "gwl",
                "stg",
                "zsv",
                "fra",
                "lfm",
                "son",
                "hvm",
                "opv",
                "wam",
                "xy"
            ],
            "options": {
                "enum_titles": [
                    "Mittenstärkenvermessung",
                    "Mittenstärkenstichprobenverfahren",
                    "Raummaßverfahren allgemein",
                    "Sektionsraummaßverfahren",
                    "Konventionelles Raummaßverfahren",
                    "Stirnflächenverfahren",
                    "Zählung",
                    "Schätzung",
                    "Werkvermessung",
                    "Gewichtsmaßermittlung",
                    "Gewichtsmaßermittlung atro",
                    "Gewichtsmaßermittlung lutro",
                    "Stangenvermessung",
                    "Zopfstärkenvermessung",
                    "Fremdvermessung",
                    "Laufmeter",
                    "Sonstiges",
                    "Harvestermaß",
                    "optische Poltervermessung",
                    "Waldmaß",
                    "Keins"
                ]
            },
            "type": "string"
        },
        "screening_valid_to": {
            "type": "string",
            "format": "date-time"
        },
        "calibration_id": {
            "type": "string",
            "maxLength": 30
        },
        "calibrated_until": {
            "type": "string",
            "format": "date-time"
        },
        "measuring_medium": {
            "enum": [
                "mit",
                "mis",
                "arm",
                "srm",
                "krm",
                "stf",
                "zae",
                "stz",
                "wev",
                "gwm",
                "gwa",
                "gwl",
                "stg",
                "zsv",
                "fra",
                "lfm",
                "son",
                "hvm",
                "opv",
                "wam",
                "xy"
            ],
            "options": {
                "enum_titles": [
                    "Mittenstärkenvermessung",
                    "Mittenstärkenstichprobenverfahren",
                    "Raummaßverfahren allgemein",
                    "Sektionsraummaßverfahren",
                    "Konventionelles Raummaßverfahren",
                    "Stirnflächenverfahren",
                    "Zählung",
                    "Schätzung",
                    "Werkvermessung",
                    "Gewichtsmaßermittlung",
                    "Gewichtsmaßermittlung atro",
                    "Gewichtsmaßermittlung lutro",
                    "Stangenvermessung",
                    "Zopfstärkenvermessung",
                    "Fremdvermessung",
                    "Laufmeter",
                    "Sonstiges",
                    "Harvestermaß",
                    "optische Poltervermessung",
                    "Waldmaß",
                    "Keins"
                ]
            },
            "type": "string"
        },
        "measurement": {
            "type": "object",
            "properties": {
                "photo_optical": {
                    "$ref": "#/definitions/photo_optical",
                    "title": "Photo-optisch",
                    "description": ""
                },
                "gravimetric": {
                    "$ref": "#/definitions/gravimetric",
                    "title": "Gravimetrisch",
                    "description": ""
                },
                "multi_log": {
                    "$ref": "#/definitions/multi_log",
                    "title": "Volumenaggregation",
                    "description": ""
                },
                "single_log": {
                    "$ref": "#/definitions/single_log",
                    "title": "Einzelstamm",
                    "description": ""
                }
            }
        },
        "photo_optical": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "measuring_data": {
                        "$ref": "#/definitions/measuring_data",
                        "title": "Vermessungsdaten",
                        "description": ""
                    },
                    "photo_measuring_technique": {
                        "$ref": "#/definitions/photo_measuring_technique",
                        "title": "Messtechnik",
                        "description": "Benennung der genutzten photo-optischen Messtechnik"
                    },
                    "photo_device_id": {
                        "$ref": "#/definitions/photo_device_id",
                        "title": "Geräte-ID",
                        "description": "Einmalige Kennung des verwendeten Gerätes zur Photo-Vermessung"
                    },
                    "pile_pic": {
                        "$ref": "#/definitions/pile_pic",
                        "title": "Polterfoto",
                        "description": ""
                    },
                    "photo_text": {
                        "$ref": "#/definitions/photo_text",
                        "title": "Bemerkung",
                        "description": "Freies Eingabefeld für weitere Angaben"
                    },
                    "invoice_header": {
                        "$ref": "#/definitions/invoice_header",
                        "title": "Rechnungskopf",
                        "description": ""
                    }
                },
                "required": [
                    "measuring_data",
                    "pile_pic"
                ]
            },
            "properties": {}
        },
        "measuring_data": {
            "type": "object",
            "properties": {
                "measuring_time": {
                    "$ref": "#/definitions/measuring_time",
                    "title": "Vermessungszeitpunkt",
                    "description": "Datum und Uhrzeit zu dem das Messergebnis vorliegt"
                },
                "measurement_no": {
                    "$ref": "#/definitions/measurement_no",
                    "title": "Messprotokollnummer",
                    "description": "Eindeutige Kennung der Vermessung"
                },
                "measurement_item": {
                    "$ref": "#/definitions/measurement_item",
                    "title": "Messprotokollposition",
                    "description": "Kennung der Unterposition eines Messprotokolles"
                }
            },
            "required": [
                "measuring_time",
                "measurement_no"
            ]
        },
        "measuring_time": {
            "type": "string",
            "format": "date-time"
        },
        "measurement_no": {
            "type": "string",
            "maxLength": 30
        },
        "measurement_item": {
            "type": "number"
        },
        "photo_measuring_technique": {
            "enum": [
                "klma",
                "harv",
                "inul",
                "inin",
                "drei",
                "rokl",
                "rome",
                "foha",
                "foim",
                "fomo",
                "tauv",
                "stve",
                "mame",
                "elwi"
            ],
            "options": {
                "enum_titles": [
                    "Kluppe/Maßband",
                    "Harvesteraggregat",
                    "2D Messverfahren (zwei Ebenen Messung Infrarot/Ultraschall)",
                    "2D Messverfahren (zwei Ebenen Messung Infrarot/Infrarot)",
                    "3D Messverfahren",
                    "3D rotierende Kluppe",
                    "Röntgen-Messverfahren",
                    "Foto-optisches Messverfahren (handgeführtes Gerät)",
                    "Foto-optisches Messverfahren (montiertes/immobiles Gerät)",
                    "Foto-optisches Messverfahren (montiertes/mobiles Gerät)",
                    "Tauchverfahren",
                    "Schnelltrocknungsverfahren (atro, Probenwaage)",
                    "Masseermittlung (lutro, Fahrzeugwaage)",
                    "Elektrische Widerstandsmessung"
                ]
            },
            "type": "string"
        },
        "photo_device_id": {
            "type": "string",
            "maxLength": 30
        },
        "pile_pic": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "wood_id": {
                        "$ref": "#/definitions/wood_id",
                        "title": "Holznummer",
                        "description": ""
                    },
                    "square_measure": {
                        "$ref": "#/definitions/square_measure",
                        "title": "Flächenmaß",
                        "description": ""
                    },
                    "pile_pic_data": {
                        "$ref": "#/definitions/pile_pic_data",
                        "title": "Foto-Produktdaten",
                        "description": ""
                    },
                    "coordinate": {
                        "$ref": "#/definitions/coordinate",
                        "title": "Koordinaten",
                        "description": ""
                    },
                    "other_file": {
                        "$ref": "#/definitions/other_file",
                        "title": "Dateianhang",
                        "description": ""
                    }
                },
                "required": [
                    "square_measure",
                    "pile_pic_data",
                    "coordinate"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "square_measure": {
            "type": "object",
            "properties": {
                "conversion_factor": {
                    "$ref": "#/definitions/conversion_factor",
                    "title": "Umrechnungsfaktor",
                    "description": "Reduktionsfaktor von Brutto- zu Nettowert des Polters"
                },
                "pile_front": {
                    "$ref": "#/definitions/pile_front",
                    "title": "Polterfront",
                    "description": "Quadratmeter der Polterfrontfläche"
                },
                "pile_back": {
                    "$ref": "#/definitions/pile_back",
                    "title": "Polterrückseite",
                    "description": "Quadratmeter der Polterrückfläche"
                }
            },
            "required": [
                "conversion_factor",
                "pile_front"
            ]
        },
        "conversion_factor": {
            "type": "number"
        },
        "pile_front": {
            "type": "number"
        },
        "pile_back": {
            "type": "number"
        },
        "pile_pic_data": {
            "type": "object",
            "properties": {
                "aggregation_type": {
                    "$ref": "#/definitions/aggregation_type",
                    "title": "Aggregationstyp",
                    "description": "Kriterium nach dem Aggregiert wurde"
                },
                "aggregation_level": {
                    "$ref": "#/definitions/aggregation_level",
                    "title": "Aggregationsstufe",
                    "description": "Angabe ob Holzpolter, Bahn-Waggon oder LKW-Fuhre vermessen wurde"
                },
                "wood_definition": {
                    "$ref": "#/definitions/wood_definition",
                    "title": "Holzdefinition",
                    "description": ""
                },
                "mean_length": {
                    "$ref": "#/definitions/mean_length",
                    "title": "Mittlere Länge",
                    "description": "(Mittlere) Länge des Holzes in der Aggregation"
                },
                "length_class": {
                    "$ref": "#/definitions/length_class",
                    "title": "Längenklasse",
                    "description": "Angabe der vorliegenden Längenklasse"
                },
                "mean_diameter": {
                    "$ref": "#/definitions/mean_diameter",
                    "title": "Mittlerer Durchmesser",
                    "description": "Mittlerer Durchmesser der Polterstämme"
                },
                "thickness_class": {
                    "$ref": "#/definitions/thickness_class",
                    "title": "Stärkeklasse",
                    "description": "Klassifizierung der mittleren Stammstärke"
                },
                "quality_attribute": {
                    "$ref": "#/definitions/quality_attribute",
                    "title": "Qualitätsmerkmal",
                    "description": "Angabe möglicher qualitätsrelevanter Merkmale"
                },
                "attribute": {
                    "$ref": "#/definitions/attribute",
                    "title": "Preismerkmale",
                    "description": "Holzmerkmale die den Preis beeinflussen"
                }
            },
            "required": [
                "aggregation_type",
                "wood_definition"
            ]
        },
        "aggregation_level": {
            "enum": [
                "lkw",
                "bahn",
                "pol",
                "mon",
                "qua",
                "jah",
                "gesv",
                "mesp"
            ],
            "options": {
                "enum_titles": [
                    "LKW-Fuhre",
                    "Bahn-Waggon",
                    "Polter",
                    "Monat",
                    "Quartal",
                    "Jahr",
                    "Gesamtvertrag",
                    "Messprotokoll"
                ]
            },
            "type": "string"
        },
        "length_class": {
            "enum": [
                "l1",
                "l2",
                "l3",
                "l_lbh",
                "lks1",
                "lks2",
                "lks3",
                "lks4",
                "llh_kranlang",
                "lkh1",
                "lkh2",
                "llh_bahn",
                "llh_lastwagen",
                "bf",
                "ku",
                "kv",
                "sus",
                "slz",
                "ild",
                "iku",
                "eld",
                "eku",
                "sue",
                "sei",
                "szw"
            ],
            "options": {
                "enum_titles": [
                    "Nadelholz L1 (4-6m)",
                    "Nadelholz L2 (6,5-14,5m)",
                    "Nadelholz L3 (≥15m)",
                    "Laubholz L_LBH (≥3m)",
                    "Kleinstangen (13-15m)",
                    "Kleinstangen (9-12m)",
                    "Kleinstangen (6-8m)",
                    "Kleinstangen (5m)",
                    "Energie-Industrieholz_Länge: Langholz (3-7m Schrittmaß)",
                    "Energie_Industrieholz_Länge: Kurzholz (1m)",
                    "Energie-Industrieholz_Länge: Kurzholz (2m)",
                    "Industrieholz_Länge: Langholz (5-6m Bahn)",
                    "Industrieholz_Länge: Langholz (3-7m Lastwagen)",
                    "Baumfallend",
                    "Kranlänge unvermessen (3-7m)",
                    "Kranlänge vermessen und abgelängt (3-7m)",
                    "Stammholz Abschnitte, < 6 m",
                    "Stammholz lang, zufällige Längen",
                    "Industrieholz lang, > 3 m",
                    "Industrieholz kurz, 1-3 m",
                    "Energieholz lang, > 3 m",
                    "Energieholz kurz, 1-3 m",
                    "Scheitholz, < 1 m",
                    "Schichtholz, 1 m",
                    "Schichtholz, 2 m"
                ]
            },
            "type": "string"
        },
        "mean_diameter": {
            "type": "number",
            "maximum": 200
        },
        "photo_text": {
            "type": "string",
            "maxLength": 255
        },
        "gravimetric": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "measuring_data": {
                        "$ref": "#/definitions/measuring_data",
                        "title": "Vermessungsdaten",
                        "description": ""
                    },
                    "gravi_measuring_technique": {
                        "$ref": "#/definitions/gravi_measuring_technique",
                        "title": "Messtechnik",
                        "description": "Verwendete Messtechnik zur gravimetrischen Vermessung"
                    },
                    "vessel_scale_cal_to": {
                        "$ref": "#/definitions/vessel_scale_cal_to",
                        "title": "Eichdatum Fahrzeugwaage bis",
                        "description": "Datum bis zu dem die Eichung der Fahrzeugwaage gültig ist"
                    },
                    "sample_scale_cal_to": {
                        "$ref": "#/definitions/sample_scale_cal_to",
                        "title": "Eichdatum Probenwaage bis",
                        "description": "Datum bis zu dem die Eichung der Probenwaage gültig ist"
                    },
                    "pile_weight": {
                        "$ref": "#/definitions/pile_weight",
                        "title": "Poltergewicht",
                        "description": ""
                    },
                    "gravimetric_text": {
                        "$ref": "#/definitions/gravimetric_text",
                        "title": "Bemerkungen",
                        "description": "Freies Eingabefeld für Bemerkungen zur gravimetrischen Vermessung"
                    },
                    "invoice_header": {
                        "$ref": "#/definitions/invoice_header",
                        "title": "Rechnungskopf",
                        "description": ""
                    }
                },
                "required": [
                    "measuring_data",
                    "pile_weight"
                ]
            },
            "properties": {}
        },
        "gravi_measuring_technique": {
            "enum": [
                "klma",
                "harv",
                "inul",
                "inin",
                "drei",
                "rokl",
                "rome",
                "foha",
                "foim",
                "fomo",
                "tauv",
                "stve",
                "mame",
                "elwi"
            ],
            "options": {
                "enum_titles": [
                    "Kluppe/Maßband",
                    "Harvesteraggregat",
                    "2D Messverfahren (zwei Ebenen Messung Infrarot/Ultraschall)",
                    "2D Messverfahren (zwei Ebenen Messung Infrarot/Infrarot)",
                    "3D Messverfahren",
                    "3D rotierende Kluppe",
                    "Röntgen-Messverfahren",
                    "Foto-optisches Messverfahren (handgeführtes Gerät)",
                    "Foto-optisches Messverfahren (montiertes/immobiles Gerät)",
                    "Foto-optisches Messverfahren (montiertes/mobiles Gerät)",
                    "Tauchverfahren",
                    "Schnelltrocknungsverfahren (atro, Probenwaage)",
                    "Masseermittlung (lutro, Fahrzeugwaage)",
                    "Elektrische Widerstandsmessung"
                ]
            },
            "type": "string"
        },
        "vessel_scale_cal_to": {
            "type": "string",
            "format": "date-time"
        },
        "sample_scale_cal_to": {
            "type": "string",
            "format": "date-time"
        },
        "pile_weight": {
            "type": "object",
            "properties": {
                "wood_id": {
                    "$ref": "#/definitions/wood_id",
                    "title": "Holznummer",
                    "description": ""
                },
                "wood_definition": {
                    "$ref": "#/definitions/wood_definition",
                    "title": "Holzdefinition",
                    "description": ""
                },
                "dry_content": {
                    "$ref": "#/definitions/dry_content",
                    "title": "Trockengehalt",
                    "description": "Prozentualer Anteil der Trockenmasse am Poltergesamtgewicht"
                }
            },
            "required": [
                "wood_definition"
            ]
        },
        "dry_content": {
            "type": "number",
            "maximum": 100
        },
        "gravimetric_text": {
            "type": "string",
            "maxLength": 255
        },
        "multi_log": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "measuring_data": {
                        "$ref": "#/definitions/measuring_data",
                        "title": "Vermessungsdaten",
                        "description": ""
                    },
                    "measuring_technique": {
                        "$ref": "#/definitions/measuring_technique",
                        "title": "Messtechnik",
                        "description": "Verwendete Messtechnik zur volumetrischen Erfassung"
                    },
                    "aggregation_content": {
                        "$ref": "#/definitions/aggregation_content",
                        "title": "Vermessungsaggregation",
                        "description": ""
                    },
                    "invoice_header": {
                        "$ref": "#/definitions/invoice_header",
                        "title": "Rechnungskopf",
                        "description": ""
                    }
                },
                "required": [
                    "measuring_data",
                    "aggregation_content"
                ]
            },
            "properties": {}
        },
        "measuring_technique": {
            "enum": [
                "klma",
                "harv",
                "inul",
                "inin",
                "drei",
                "rokl",
                "rome",
                "foha",
                "foim",
                "fomo",
                "tauv",
                "stve",
                "mame",
                "elwi"
            ],
            "options": {
                "enum_titles": [
                    "Kluppe/Maßband",
                    "Harvesteraggregat",
                    "2D Messverfahren (zwei Ebenen Messung Infrarot/Ultraschall)",
                    "2D Messverfahren (zwei Ebenen Messung Infrarot/Infrarot)",
                    "3D Messverfahren",
                    "3D rotierende Kluppe",
                    "Röntgen-Messverfahren",
                    "Foto-optisches Messverfahren (handgeführtes Gerät)",
                    "Foto-optisches Messverfahren (montiertes/immobiles Gerät)",
                    "Foto-optisches Messverfahren (montiertes/mobiles Gerät)",
                    "Tauchverfahren",
                    "Schnelltrocknungsverfahren (atro, Probenwaage)",
                    "Masseermittlung (lutro, Fahrzeugwaage)",
                    "Elektrische Widerstandsmessung"
                ]
            },
            "type": "string"
        },
        "aggregation_content": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "wood_id": {
                        "$ref": "#/definitions/wood_id",
                        "title": "Holznummer",
                        "description": ""
                    },
                    "aggregation_data": {
                        "$ref": "#/definitions/aggregation_data",
                        "title": "Volumen-Produktdaten",
                        "description": ""
                    },
                    "other_file": {
                        "$ref": "#/definitions/other_file",
                        "title": "Dateianhang",
                        "description": ""
                    }
                },
                "required": [
                    "aggregation_data"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "aggregation_data": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "aggregation_type": {
                        "$ref": "#/definitions/aggregation_type",
                        "title": "Aggregationstyp",
                        "description": "Kriterium nach dem Aggregiert wurde"
                    },
                    "aggregation_level": {
                        "$ref": "#/definitions/aggregation_level",
                        "title": "Aggregationsstufe",
                        "description": "Angabe ob Holzpolter, Bahn-Waggon oder LKW-Fuhre vermessen wurde"
                    },
                    "wood_definition": {
                        "$ref": "#/definitions/wood_definition",
                        "title": "Holzdefinition",
                        "description": ""
                    },
                    "mean_length": {
                        "$ref": "#/definitions/mean_length",
                        "title": "Mittlere Länge",
                        "description": "(Mittlere) Länge des Holzes in der Aggregation"
                    },
                    "mean_top_diameter": {
                        "$ref": "#/definitions/mean_top_diameter",
                        "title": "Mittlerer Zopfdurchmesser",
                        "description": "(Mittlerer) Durchmesser des dünnen Endes in der Aggregation"
                    },
                    "mean_centre_diameter": {
                        "$ref": "#/definitions/mean_centre_diameter",
                        "title": "Mittlerer Mittendurchmesser",
                        "description": "(Mittlerer) Durchmesser der Stammmitte in der Aggregation"
                    },
                    "mean_bottom_diameter": {
                        "$ref": "#/definitions/mean_bottom_diameter",
                        "title": "Mittlerer Stammfußdurchmesser",
                        "description": "(Mittlerer) Durchmesser des dicken Endes der Stämme in der Aggregation"
                    },
                    "thickness_class": {
                        "$ref": "#/definitions/thickness_class",
                        "title": "Stärkeklasse",
                        "description": "Klassifizierung der mittleren Stammstärke"
                    },
                    "attribute": {
                        "$ref": "#/definitions/attribute",
                        "title": "Preismerkmale",
                        "description": "Holzmerkmale die den Preis beeinflussen"
                    }
                },
                "required": [
                    "aggregation_type",
                    "wood_definition"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "mean_top_diameter": {
            "type": "number",
            "maximum": 200
        },
        "mean_centre_diameter": {
            "type": "number",
            "maximum": 200
        },
        "mean_bottom_diameter": {
            "type": "number",
            "maximum": 200
        },
        "single_log": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "measuring_data": {
                        "$ref": "#/definitions/measuring_data",
                        "title": "Vermessungsdaten",
                        "description": ""
                    },
                    "measuring_technique": {
                        "$ref": "#/definitions/measuring_technique",
                        "title": "Messtechnik",
                        "description": "Verwendete Messtechnik zur volumetrischen Erfassung"
                    },
                    "single_log_data": {
                        "$ref": "#/definitions/single_log_data",
                        "title": "Einzelstamm-Produktdaten",
                        "description": ""
                    },
                    "other_file": {
                        "$ref": "#/definitions/other_file",
                        "title": "Dateianhang",
                        "description": ""
                    },
                    "invoice_header": {
                        "$ref": "#/definitions/invoice_header",
                        "title": "Rechnungskopf",
                        "description": ""
                    }
                },
                "required": [
                    "measuring_data",
                    "single_log_data"
                ]
            },
            "properties": {}
        },
        "single_log_data": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "part_no": {
                        "$ref": "#/definitions/part_no",
                        "title": "Stammabschnittsnummer",
                        "description": "Nummerierung des Klammerstammstückes (1 = Erdstammstück, 2 = erstes Folgestück, etc.)"
                    },
                    "wood_id": {
                        "$ref": "#/definitions/wood_id",
                        "title": "Holznummer",
                        "description": ""
                    },
                    "wood_definition": {
                        "$ref": "#/definitions/wood_definition",
                        "title": "Holzdefinition",
                        "description": ""
                    },
                    "real_length": {
                        "$ref": "#/definitions/real_length",
                        "title": "Reale Länge",
                        "description": "Physische Länge des Stammes"
                    },
                    "grade_length": {
                        "$ref": "#/definitions/grade_length",
                        "title": "Sortenlänge",
                        "description": "Längenklasse des Holzes gemäß Sortierung"
                    },
                    "diameter": {
                        "$ref": "#/definitions/diameter",
                        "title": "Durchmesser",
                        "description": ""
                    },
                    "grade_diameter_one": {
                        "$ref": "#/definitions/grade_diameter_one",
                        "title": "Sortendurchmesser 1",
                        "description": "(Erstes) Messergebnis des Sortendurchmessers"
                    },
                    "grade_diameter_two": {
                        "$ref": "#/definitions/grade_diameter_two",
                        "title": "Sortendurchmesser 2",
                        "description": "Zweites Messergebnis des Sortendurchmessers (Bei kreuzweiser Messung)"
                    },
                    "forest_mean_diameter": {
                        "$ref": "#/definitions/forest_mean_diameter",
                        "title": "Forstlicher Mittendurchmesser",
                        "description": "Mittendurchmesser des Stammes, forstlich abgerundet"
                    },
                    "top_diameter": {
                        "$ref": "#/definitions/top_diameter",
                        "title": "Zopfdurchmesser",
                        "description": "Durchmesser des dünnen Stammendes"
                    },
                    "bottom_diameter": {
                        "$ref": "#/definitions/bottom_diameter",
                        "title": "Stammfußdurchmesser",
                        "description": "Durchmesser des dicken Stammendes"
                    },
                    "shrinking": {
                        "$ref": "#/definitions/shrinking",
                        "title": "Abholzigkeit",
                        "description": "Durchmesserverringerung in Zentimeter je Meter"
                    },
                    "crook": {
                        "$ref": "#/definitions/crook",
                        "title": "Krümmung",
                        "description": "Zentimeterabweichung der Stammmitte von der Stammgeraden je Meter"
                    },
                    "ovality": {
                        "$ref": "#/definitions/ovality",
                        "title": "Ovalität",
                        "description": "Verhältnis des größten zum geringsten Durchmesser in Stammmitte bei kreuzweiser Vermessung"
                    },
                    "single_log_thickness_class": {
                        "$ref": "#/definitions/single_log_thickness_class",
                        "title": "Stärkeklasse",
                        "description": "Klassifizierung des Stammes je Durchmesser"
                    },
                    "single_log_text": {
                        "$ref": "#/definitions/single_log_text",
                        "title": "Bemerkungen",
                        "description": "Freies Eingabefeld für weitere Informationen zum Stamm"
                    },
                    "attribute": {
                        "$ref": "#/definitions/attribute",
                        "title": "Preismerkmale",
                        "description": "Holzmerkmale die den Preis beeinflussen"
                    }
                },
                "required": [
                    "wood_definition",
                    "grade_diameter_one",
                    "forest_mean_diameter",
                    "top_diameter",
                    "single_log_thickness_class"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "real_length": {
            "type": "number"
        },
        "grade_diameter_one": {
            "type": "number",
            "maximum": 200
        },
        "grade_diameter_two": {
            "type": "number",
            "maximum": 200
        },
        "forest_mean_diameter": {
            "type": "number",
            "maximum": 200
        },
        "top_diameter": {
            "type": "number",
            "maximum": 200
        },
        "bottom_diameter": {
            "type": "number",
            "maximum": 200
        },
        "shrinking": {
            "type": "number",
            "maximum": 10
        },
        "crook": {
            "type": "number",
            "maximum": 10
        },
        "ovality": {
            "type": "number",
            "maximum": 10
        },
        "single_log_thickness_class": {
            "enum": [
                "o",
                "ch_1a",
                "ch_1b",
                "ch_2a",
                "ch_2b",
                "ch_3a",
                "ch_3b",
                "ch_4a",
                "ch_4b",
                "ch_4",
                "ch_5",
                "ch_5a",
                "ch_5b",
                "ch_6",
                "ch_6a",
                "ch_6b",
                "d0",
                "d1",
                "d1a",
                "d1b",
                "d2",
                "d2a",
                "d2b",
                "d3",
                "d3a",
                "d3b",
                "d4",
                "d4a",
                "d4b",
                "d5",
                "d5a",
                "d5b",
                "d6",
                "d6a",
                "d6b",
                "d7",
                "d8"
            ],
            "options": {
                "enum_titles": [
                    "Ohne Stärke",
                    "Stärke: 1a (10-14 cm)",
                    "Stärke: 1b (15-19 cm), Zopf 14 cm",
                    "Stärke: 2a (20-24 cm), Zopf 18 cm",
                    "Stärke: 2b (25-29 cm), Zopf 18 cm",
                    "Stärke: 3a (30-34 cm), Zopf 18 cm",
                    "Stärke: 3b (35-39 cm), Zopf 18 cm",
                    "Stärke: 4a (40-44 cm), Zopf 22 cm",
                    "Stärke: 4b (45-49 cm), Zopf 22 cm",
                    "Stärke: 4 (40-49 cm), Zopf 22 cm",
                    "Stärke: 5 (50-59 cm), Zopf 22 cm",
                    "Stärke: 5a (50-54 cm), Zopf 22 cm",
                    "Stärke: 5b (55-59 cm), Zopf 22 cm",
                    "Stärke: 6 (60-69 cm), Zopf 22 cm",
                    "Stärke: 6a (60-64 cm), Zopf 22 cm",
                    "Stärke: 6b (65-69 cm), Zopf 22 cm",
                    "Mittenstärke 0-9 cm",
                    "Mittenstärke 10-19 cm",
                    "Mittenstärke 10-14 cm",
                    "Mittenstärke 15-19 cm",
                    "Mittenstärke 20-29 cm",
                    "Mittenstärke 20-24 cm",
                    "Mittenstärke 25-29 cm",
                    "Mittenstärke 30-39 cm",
                    "Mittenstärke 30-34 cm",
                    "Mittenstärke 35-39 cm",
                    "Mittenstärke 40-49 cm",
                    "Mittenstärke 40-44 cm",
                    "Mittenstärke 45-49 cm",
                    "Mittenstärke 50-59 cm",
                    "Mittenstärke 50-54 cm",
                    "Mittenstärke 55-59 cm",
                    "Mittenstärke 60-69 cm",
                    "Mittenstärke 60-64 cm",
                    "Mittenstärke 65-69 cm",
                    "Mittenstärke 70-79 cm",
                    "Mittenstärke ≥80 cm"
                ]
            },
            "type": "string"
        },
        "single_log_text": {
            "type": "string",
            "maxLength": 255
        },
        "transfer_order": {
            "type": "object",
            "required": [
                "transfer_address",
                "transfer_inf",
                "pile_data"
            ],
            "properties": {
                "transfer_address": {
                    "$ref": "#/definitions/transfer_address",
                    "title": "Transportadressen",
                    "description": ""
                },
                "transfer_inf": {
                    "$ref": "#/definitions/transfer_inf",
                    "title": "Transportinformationen",
                    "description": ""
                },
                "barcode_inf": {
                    "$ref": "#/definitions/barcode_inf",
                    "title": "Barcodeinformationen",
                    "description": ""
                },
                "pile_data": {
                    "$ref": "#/definitions/pile_data",
                    "title": "Polterdaten",
                    "description": ""
                },
                "status": {
                    "$ref": "#/definitions/status",
                    "title": "Status",
                    "description": ""
                }
            }
        },
        "transfer_inf": {
            "type": "object",
            "properties": {
                "validity_period": {
                    "$ref": "#/definitions/validity_period",
                    "title": "Gültigkeit",
                    "description": ""
                },
                "trans_period_date": {
                    "$ref": "#/definitions/trans_period_date",
                    "title": "Abfuhrfristdatum",
                    "description": "Sofern sich die Abfuhrfrist vom Gültigkeitszeitraum des Transportauftrages unterscheidet"
                },
                "distance": {
                    "$ref": "#/definitions/distance",
                    "title": "Transportentfernung",
                    "description": "Zurückzulegende Transportstrecke als Grundlage der Frachtkosten oder Frachtplanung"
                },
                "trans_zone": {
                    "$ref": "#/definitions/trans_zone",
                    "title": "Transportzone",
                    "description": "Zone, in der sich das Holz befindet. Oft Berechnungsgrundlage der Frachtvergütung"
                },
                "trans_price": {
                    "$ref": "#/definitions/trans_price",
                    "title": "Frachtpreis",
                    "description": ""
                },
                "delivery_no_range": {
                    "$ref": "#/definitions/delivery_no_range",
                    "title": "Nummernkreis",
                    "description": ""
                },
                "trans_text": {
                    "$ref": "#/definitions/trans_text",
                    "title": "Bemerkungen",
                    "description": "Freie Bemerkungen zum Transportauftrag"
                },
                "other_file": {
                    "$ref": "#/definitions/other_file",
                    "title": "Dateianhang",
                    "description": ""
                }
            }
        },
        "validity_period": {
            "type": "object",
            "properties": {
                "from": {
                    "$ref": "#/definitions/from",
                    "title": "Gültigkeitsbeginn",
                    "description": "Datum ab dem der Transportauftrag gültig ist"
                },
                "until": {
                    "$ref": "#/definitions/until",
                    "title": "Gültigkeitsende",
                    "description": "Datum zu dem der Transportauftrag endet"
                }
            }
        },
        "from": {
            "type": "string",
            "format": "date-time"
        },
        "until": {
            "type": "string",
            "format": "date-time"
        },
        "trans_period_date": {
            "type": "string",
            "format": "date-time"
        },
        "distance": {
            "type": "number"
        },
        "trans_zone": {
            "type": "string",
            "maxLength": 100
        },
        "trans_price": {
            "type": "object",
            "properties": {
                "trans_price_value": {
                    "$ref": "#/definitions/trans_price_value",
                    "title": "Frachtpreis Wert",
                    "description": "Betrag des angesetzten Frachtpreises"
                },
                "trans_price_unit": {
                    "$ref": "#/definitions/trans_price_unit",
                    "title": "Preiseinheit",
                    "description": "Einheit zum gewählten Betrag des Frachtpreises"
                },
                "det_base": {
                    "$ref": "#/definitions/det_base",
                    "title": "Bemessungsgrundlage",
                    "description": "Einheitsangabe, falls Preis pro Einheit"
                },
                "trans_price_currency": {
                    "$ref": "#/definitions/trans_price_currency",
                    "title": "Währung",
                    "description": "Angabe über die Währung in der die Transportkosten errechnet werden"
                }
            }
        },
        "trans_price_value": {
            "type": "number"
        },
        "trans_price_unit": {
            "enum": [
                "bei",
                "bet",
                "pro"
            ],
            "options": {
                "enum_titles": [
                    "Betrag je Einheit",
                    "Absolutbetrag",
                    "Prozent"
                ]
            },
            "type": "string"
        },
        "trans_price_currency": {
            "enum": [
                "EUR",
                "USD",
                "BGN",
                "BYN",
                "CAD",
                "CHF",
                "CZK",
                "DKK",
                "GBP",
                "GEL",
                "HRK",
                "HUF",
                "NOK",
                "PLN",
                "RON",
                "RSD",
                "SEK",
                "UAH"
            ],
            "options": {
                "enum_titles": [
                    "Euro",
                    "US Dollar",
                    "Lew",
                    "Rubel",
                    "Kanadische Dollar",
                    "Franken",
                    "Tschechische Krone",
                    "Dänische Krone",
                    "Pfund",
                    "Lari",
                    "Kuna",
                    "Forint",
                    "Norwegische Krone",
                    "Zloty",
                    "Leu",
                    "Dinar",
                    "Schwedische Krone",
                    "Hrywnja"
                ]
            },
            "type": "string"
        },
        "delivery_no_range": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "delivery_no": {
                        "$ref": "#/definitions/delivery_no",
                        "title": "Lieferscheinnummer",
                        "description": "Eindeutige Kennung des Lieferscheines als Referenz"
                    }
                },
                "required": [
                    "delivery_no"
                ]
            },
            "properties": {}
        },
        "trans_text": {
            "type": "string",
            "maxLength": 255
        },
        "barcode_inf": {
            "type": "object",
            "properties": {
                "barcode_type": {
                    "$ref": "#/definitions/barcode_type",
                    "title": "Barcodetyp",
                    "description": "Angabe des verwendeten Barcodetyps, wie z.B. EAN, UPC, GS1, oder andere"
                },
                "barcode_subtype": {
                    "$ref": "#/definitions/barcode_subtype",
                    "title": "Barcodesubtyp",
                    "description": "Angabe eines möglichen Barcodesubtyps"
                },
                "barcode_length": {
                    "$ref": "#/definitions/barcode_length",
                    "title": "Barcodelänge",
                    "description": "Anzahl der Zeichen im Barcode"
                },
                "character_set": {
                    "$ref": "#/definitions/character_set",
                    "title": "Zeichensatz",
                    "description": "Angabe der zulässigen Zeichen im Barcode"
                },
                "content": {
                    "$ref": "#/definitions/content",
                    "title": "Dateninhalt",
                    "description": "Klartext-Eingabe des Codes"
                },
                "codification": {
                    "$ref": "#/definitions/codification",
                    "title": "Kodierung",
                    "description": "Angabe ob Strichcode, Stapelcode, Matrixcode oder Farbcode"
                }
            }
        },
        "barcode_type": {
            "type": "string",
            "maxLength": 25
        },
        "barcode_subtype": {
            "type": "string"
        },
        "barcode_length": {
            "type": "number",
            "maximum": 128
        },
        "character_set": {
            "type": "string",
            "maxLength": 25
        },
        "content": {
            "type": "string",
            "maxLength": 255
        },
        "codification": {
            "type": "string",
            "maxLength": 128
        },
        "wood_allocation": {
            "title": "Holzbereitstellung",
            "type": "object",
            "required": [
                "doc_type",
                "address",
                "wood_data"
            ],
            "properties": {
                "doc_type": {
                    "$ref": "#/definitions/doc_type",
                    "title": "Dokumentfunktion",
                    "description": "Definiert die Funktion der Holzbereitstellung"
                },
                "address": {
                    "$ref": "#/definitions/address",
                    "title": "Adressen",
                    "description": ""
                },
                "delivery_inf": {
                    "$ref": "#/definitions/delivery_inf",
                    "title": "Lieferinformation",
                    "description": ""
                },
                "wood_data": {
                    "$ref": "#/definitions/wood_data",
                    "title": "Holzdaten",
                    "description": ""
                },
                "status": {
                    "$ref": "#/definitions/status",
                    "title": "Status",
                    "description": ""
                }
            }
        },
        "doc_type": {
            "enum": [
                "abf",
                "ang",
                "hba"
            ],
            "options": {
                "enum_titles": [
                    "Abfuhrfreigabe",
                    "Angebot",
                    "Holzbereitstellungsanzeige"
                ]
            },
            "type": "string"
        },
        "address": {
            "type": "object",
            "properties": {
                "supplier": {
                    "$ref": "#/definitions/supplier",
                    "title": "Lieferant",
                    "description": ""
                },
                "other_address": {
                    "$ref": "#/definitions/other_address",
                    "title": "Weitere Adressen",
                    "description": ""
                }
            },
            "required": [
                "supplier"
            ]
        },
        "delivery_inf": {
            "type": "object",
            "properties": {
                "delivery_term": {
                    "$ref": "#/definitions/delivery_term",
                    "title": "Lieferbedingungen",
                    "description": "Definition der vereinbarten Lieferbedingungen, wie z.B. \"Frei Werk\" oder \"Frei Waldstraße\""
                },
                "trans_clearance_date": {
                    "$ref": "#/definitions/trans_clearance_date",
                    "title": "Abfuhrfreigabedatum",
                    "description": "Datum ab dem die Abfuhr freigegeben ist"
                },
                "trans_period_days": {
                    "$ref": "#/definitions/trans_period_days",
                    "title": "Abfuhrfrist in Tagen",
                    "description": "Anzahl der Tage in denen die Abfuhr erfolgt sein muss"
                },
                "other_file": {
                    "$ref": "#/definitions/other_file",
                    "title": "Dateianhang",
                    "description": ""
                },
                "del_inf_text": {
                    "$ref": "#/definitions/del_inf_text",
                    "title": "Bemerkungen zur Lieferung",
                    "description": "Weitere Informationen bezüglich der Lieferung"
                }
            }
        },
        "delivery_term": {
            "enum": [
                "uws",
                "uwe",
                "uzw",
                "uwa",
                "usc",
                "exw",
                "fca",
                "fob",
                "dat",
                "ddp",
                "cpt",
                "cip",
                "dap",
                "fas",
                "cfr",
                "cif"
            ],
            "options": {
                "enum_titles": [
                    "Unfrei Waldstraße",
                    "Unfrei Werk",
                    "Unfrei Zwischenlager",
                    "Unfrei Waggon",
                    "Unfrei Schiff",
                    "Frei Stock / Ab Werk (incoterm)",
                    "Frei Waldstraße / Frei Frachtführer (incoterm)",
                    "Frei Schiff/Waggon / Frei an Bord (incoterm)",
                    "Frei Zwischenlager / Geliefert frei Terminal (incoterm)",
                    "Frei Werk / Geliefert verzollt (incoterm)",
                    "Frachtfrei bis (incoterm)",
                    "Frachtfrei versichert bis (incoterm)",
                    "Geliefert benannter Ort (incoterm)",
                    "Frei längsseits Schiff (incoterm)",
                    "Kosten und Fracht (incoterm)",
                    "Frachtfrei (incoterm)"
                ]
            },
            "type": "string"
        },
        "trans_clearance_date": {
            "type": "string",
            "format": "date-time"
        },
        "trans_period_days": {
            "type": "number",
            "pattern": "[0-9]{1,3}"
        },
        "del_inf_text": {
            "type": "string",
            "maxLength": 255
        },
        "wood_data": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "wood_id": {
                        "$ref": "#/definitions/wood_id",
                        "title": "Holznummer",
                        "description": ""
                    },
                    "measurement_method": {
                        "$ref": "#/definitions/measurement_method",
                        "title": "Abrechnungsrelevantes Vermessungsverfahren",
                        "description": "Angabe des Vermessungsverfahrens nach dem abgerechnet wird"
                    },
                    "felling_date": {
                        "$ref": "#/definitions/felling_date",
                        "title": "Hiebsdatum",
                        "description": "Datum zu dem der Hieb durchgeführt wurde"
                    },
                    "wood_certification": {
                        "$ref": "#/definitions/wood_certification",
                        "title": "Holzzertifizierung",
                        "description": ""
                    },
                    "wood_depiction": {
                        "$ref": "#/definitions/wood_depiction",
                        "title": "Holzdarstellung",
                        "description": "Erläutert das Schema nach dem die Holzdaten in Los-Inhalt und Polterliste eingetragen sind"
                    },
                    "product_data": {
                        "$ref": "#/definitions/product_data",
                        "title": "Produktdaten",
                        "description": ""
                    },
                    "allocated_wood": {
                        "$ref": "#/definitions/allocated_wood",
                        "title": "Polterdaten",
                        "description": ""
                    }
                },
                "required": [
                    "wood_id",
                    "measurement_method",
                    "felling_date",
                    "allocated_wood"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "felling_date": {
            "type": "string",
            "format": "date-time"
        },
        "wood_depiction": {
            "enum": [
                "sh",
                "wh",
                "bh",
                "ih",
                "gl",
                "ag"
            ],
            "options": {
                "enum_titles": [
                    "Sägeholz-Modell",
                    "Wertholz-Modell",
                    "Brennholz-Modell",
                    "Industrieholz-Modell",
                    "Gesamtlos-Modell",
                    "Aggregations-Modell"
                ]
            },
            "type": "string"
        },
        "allocated_wood": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "wood_id": {
                        "$ref": "#/definitions/wood_id",
                        "title": "Holznummer",
                        "description": ""
                    },
                    "product_data": {
                        "$ref": "#/definitions/product_data",
                        "title": "Produktdaten",
                        "description": ""
                    },
                    "conversion_factor": {
                        "$ref": "#/definitions/conversion_factor",
                        "title": "Umrechnungsfaktor",
                        "description": "Reduktionsfaktor von Brutto- zu Nettowert des Polters"
                    },
                    "preservation": {
                        "$ref": "#/definitions/preservation",
                        "title": "Holzschutz",
                        "description": "Angabe ob das Polter mit Holzschutz behandelt wurde"
                    },
                    "all_wood_text": {
                        "$ref": "#/definitions/all_wood_text",
                        "title": "Bemerkungen zum Polter",
                        "description": "Freie Texteingabe für Informationen zum Polter"
                    },
                    "coordinate": {
                        "$ref": "#/definitions/coordinate",
                        "title": "Koordinaten",
                        "description": ""
                    },
                    "other_file": {
                        "$ref": "#/definitions/other_file",
                        "title": "Dateianhang",
                        "description": ""
                    }
                },
                "required": [
                    "wood_id",
                    "product_data",
                    "conversion_factor",
                    "coordinate"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "preservation": {
            "type": "boolean"
        },
        "all_wood_text": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "document": {
            "$ref": "#/definitions/document",
            "class": "TESTER-CLASS"
        },
        
    },
    "required": [
        "document"
    ],
    "ok": true,
    "warnings": [],
    "href": "http://localhost:3000/schema/1.0.2.json"
}