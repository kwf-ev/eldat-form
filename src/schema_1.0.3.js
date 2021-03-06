export default{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "$id": "https://raw.githubusercontent.com/kwf-ev/eldat-schema/1.0.3/schema_de.json",
    "title": ".eldat schema 1.0.3",
    "description": ".eldat data standard for communication between the partners in the wood supply chain.",
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
                "version",
                "transaction_id",
                "process_id",
                "module_id"
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
                            "pattern": "[0-9]+.[0-9]+.[0-9]+$"
                        }
                    }
                },
                "transaction_id": {
                    "description": "Eindeutige Kennung der Übermittlung",
                    "$ref": "#/definitions/string36"
                },
                "process_id": {
                    "description": "Eindeutige Kennung des Prozesses",
                    "$ref": "#/definitions/string36"
                },
                "module_id": {
                    "description": "Eindeutige Kennung des übermittelten Moduls",
                    "$ref": "#/definitions/string36"
                },
                "status_tech": {
                    "type": "object",
                    "properties": {
                        "code": {
                            "type": "number",
                            "title": "Technischer Status",
                            "default": 100,
                            "enum": [
                                100,
                                200
                            ],
                            "options": {
                                "enum_titles": [
                                    "erstellt",
                                    "bearbeitet"
                                ]
                            }
                        },
                        "reference_module_id": {
                            "description": "Eindeutige Kennung des Moduls, auf das sich bezogen wird.",
                            "$ref": "#/definitions/string36"
                        }
                    },
                    "required": [
                        "code"
                    ]
                },
                "response_system": {
                    "description": "Eine Adresse auf die, mit einem .eldat Dokument, geantwortet werden kann. (Meist die url einer API des Senders dieses Dokumentes.)",
                    "type": "object",
                    "properties": {
                        "uri": {
                            "description": "Host, Pfad und Port der Adresse (z.B. https://api.example.com:3000/eldat/receive)",
                            "$ref": "#/definitions/string255"
                        },
                        "user_id": {
                            "description": "Eindeutige Kennung des Nutzers. (Meist die systeminterne ID des Senders der Nachricht.)",
                            "$ref": "#/definitions/string36"
                        }
                    },
                    "required": [
                        "uri"
                    ]
                },
                "request_system": {
                    "description": "Eindeutige Kennung des Nutzers des Empfängersystems. (Meist die systeminterne ID des Empfängers der Nachricht.)",
                    "$ref": "#/definitions/string36"
                },
                "created_by": {
                    "type": "object",
                    "properties": {
                        "company": {
                            "$ref": "#/definitions/string255"
                        },
                        "application": {
                            "$ref": "#/definitions/string255"
                        },
                        "application_version": {
                            "$ref": "#/definitions/string255"
                        }
                    }
                }
            }
        },
        "eldat": {
            "type": "object",
            "oneOf": [
                {
                    "title": "Holzbereitstellung",
                    "type": "object",
                    "properties": {
                        "wood_allocation": {
                            "$ref": "#/definitions/wood_allocation"
                        }
                    }
                },
                {
                    "title": "Abrechnung",
                    "type": "object",
                    "properties": {
                        "clearing": {
                            "$ref": "#/definitions/clearing"
                        }
                    }
                },
                {
                    "title": "Lieferschein",
                    "type": "object",
                    "properties": {
                        "delivery_note": {
                            "$ref": "#/definitions/delivery_note"
                        }
                    }
                },
                {
                    "title": "Messprotokoll",
                    "type": "object",
                    "properties": {
                        "measurement_journal": {
                            "$ref": "#/definitions/measurement_journal"
                        }
                    }
                },
                {
                    "title": "Transportauftrag",
                    "type": "object",
                    "properties": {
                        "transfer_order": {
                            "$ref": "#/definitions/transfer_order"
                        }
                    }
                }
            ],
            "additionalProperties": false,
            "properties": {}
        },
        "clearing": {
            "type": "object",
            "format": "categories",
            "required": [
                "clearing_address",
                "invoice_header",
                "status_arr"
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
                "status_arr": {
                    "$ref": "#/definitions/status_arr",
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
            "title": "Staat",
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
                "title": "Zertifizierung",
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
            "title": "Zertifizierung",
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
            "title": "Betriebsart",
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
                "title": "Prozess",
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
            "title": "Referenznummerntyp",
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
            "pattern": "[A-Z0-9]{4,5}"
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
            "title": "Besteuerung",
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
            "title": "Steuernummerntyp",
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
                "title":"Kontakt",
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
                "title": "Telefonnummer",
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
                "title": "Rechnung Kopfdaten",
                "type": "object",
                "properties": {
                    "process": {
                        "$ref": "#/definitions/process",
                        "title": "Vorgang",
                        "description": ""
                    },
                    "invoice_currency": {
                        "$ref": "#/definitions/currency",
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
        "invoice_type": {
            "title": "Rechnungstyp",
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
            "title": "Zahlungsverfahren",
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
                    "disc_sur_unit"
                ]
            },
            "properties": {}
        },
        "disc_sur_type": {
            "title": "Rabatt oder Zuschlag",
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
            "title": "Preiseinheit",
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
            "title": "Bemessungsgrundlage",
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
                "title": "Steuer",
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
                    "vat_value"
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
                    "discount_value"
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
                    "mean_length_deviation":{
                        "$ref": "#/definitions/mean_length_deviation"
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
        "mean_length_deviation": {
            "type": "object",
            "title": "Abweichung von der mittleren Länge",
            "properties": {
                "negative_deviation": {
                    "title":"Negative Abweichung",
                    "description": "Differenz zwischen dem kürzesten Stamm und der Länge des Mittelstammes",
                    "type": "number",
                    "minimum":0
                },
                "positive_deviation": {
                    "title":"Positive Abweichung",
                    "description": "Differenz zwischen dem längsten Stamm und der Länge des Mittelstammes",
                    "type": "number",
                    "minimum":0
                }
            }
        },
        "wood_id": {
            "type": "array",
            "items": {
                "title": "Holznummer",
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
            "title": "Holznummerntyp",
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
            "maxLength": 36
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
            "title": "Qualität",
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
            "title": "Sorte",
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
                "ch_i",
                "rh",
                "rc",
                "pe"
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
                    "Industrieholz",
                    "Restholz",
                    "Recyclingholz",
                    "Pellets"
                ]
            },
            "type": "string"
        },
        "use": {
            "title": "Verwendungssorte",
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
            "title": "Holzart",
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
        "amount_one": {
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
                },
                "conversion_factor_qm": {
                    "$ref": "#/definitions/conversion_factor_qm"
                }
            },
            "required": [
                "amount_value",
                "amount_unit"
            ]
        },
        "amount": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/amount_one"
            },
            "properties": {},
            "minItems": 1
        },
        "conversion_factor_qm": {
            "type": "number",
            "title": "Umrechnungsfaktor",
            "description": "Umrechnungsfaktor zu Festmeter",
            "default": 1
        },
        "amount_value": {
            "type": "number"
        },
        "amount_unit": {
            "title": "Mengeneinheit",
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
            "title": "Durchmesserermittlung",
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
            "title": "Rindenzustand",
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
            "title": "Stärkeklasse",
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
                "title": "Zertifikat",
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
            "title": "Holzzertifizierungstyp",
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
            "title": "Artikelgruppe",
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
            "title": "Preismerkmal",
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
            "title": "Preiseinheit",
            "enum": [
                "bei",
                "bet"
            ],
            "options": {
                "enum_titles": [
                    "Betrag je Einheit",
                    "Absolutbetrag"
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
                "tax_rate_percent"
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
        
        "status_arr":{
            "title": "Status",
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "#/definitions/status"
            }
        },
        "status": {
            "title": "Status",
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
            "title": "Status-ID",
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
            "type": "string"
        },
        "additionalinformation": {
            "type": "string",
            "maxLength": 255
        },
        "delivery_note": {
            "format": "categories",
            "type": "object",
            "required": [
                "transfer_address",
                "transfer",
                "status_arr"
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
                "status_arr": {
                    "$ref": "#/definitions/status_arr",
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
            "title": "Stellentyp",
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
                },
                "route_definition": {
                    "$ref": "#/definitions/route_definition",
                    "title": "An- und Abfuhr-Route"
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
            "title": "Staat",
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
                "signature_data": {
                    "$ref": "#/definitions/signature_data",
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
        "signature_data": { 
            "type": "object",
            "properties": {
                "signature_string": {
                    "$ref": "#/definitions/string255",
                    "title": "Vorname Nachname",
                    "description": "Unterschrift in Klartext"
                },
                "signature_encoded": {
                    "$ref": "#/definitions/string",
                    "title": "Codierte Unterschrift",
                    "description": "Codierte Bilddaten"
                },
                "signature_coding": {
                    "$ref": "#/definitions/image_encode",
                    "title": "Codierung",
                    "description": "Format, nach dem die Unterschrift codiert wurde",
                    "default": "base64"
                }
            },
            "required": [
                "signature_string",
                "signature_encoded",
                "signature_coding"
            ]
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
                "title": "Transportmittel",
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
                    "haul_measured": {
                        "$ref": "#/definitions/haul_measured",
                        "title": "Auflademenge",
                        "description": "Die beförderte Menge, definiert durch das Aufnahmeverfahren."
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
            "title": "Ursprung",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "load": {
                        "$ref": "#/definitions/load",
                        "title": "Aufladung",
                        "description": ""
                    }
                },
                "required": [
                    "load"
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
        "product_pile": {
            "type": "array",
            "minItems": 1,
            "items": {
                "title": "Polter",
                "type": "object",
                "properties": {
                    "wood_id": {
                        "$ref": "#/definitions/wood_id",
                        "title": "Holznummer",
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
                    "amount": {
                        "$ref": "#/definitions/amount_one",
                        "title": "Menge",
                        "description": ""
                    },
                    "mean_length": {
                        "$ref": "#/definitions/mean_length",
                        "title": "Mittlere Länge",
                        "description": "(Mittlere) Länge des Holzes"
                    },
                    "mean_length_deviation":{
                        "$ref": "#/definitions/mean_length_deviation"
                    },
                    "vat_rate": {
                        "$ref": "#/definitions/vat_rate",
                        "title": "Mehrwertsteuersatz",
                        "description": "Mehrwertsteuersatz auf das beschriebene Holzprodukt"
                    },
                    "conversion_factor": {
                        "$ref": "#/definitions/conversion_factor",
                        "title": "Reduktionsfaktor",
                        "description": "Reduktionsfaktor von Brutto- zu Nettowert des Polters"
                    },
                    "preservation": {
                        "$ref": "#/definitions/preservation",
                        "title": "Holzschutz",
                        "description": "Angabe ob das Polter mit Holzschutz behandelt wurde"
                    },
                    "base_stems": {
                        "$ref": "#/definitions/integer",
                        "title": "Polterunterlagen",
                        "description": "Anzahl der Stämme als Polterunterlage"
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
                    "quality",
                    "grade",
                    "use",
                    "amount"
                ]
            }
        },
        "product_data": {
            "type": "array",
            "items": {
                "title": "Polter",
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
                    "mean_length": {
                        "$ref": "#/definitions/mean_length",
                        "title": "Mittlere Länge",
                        "description": "(Mittlere) Länge des Holzes in der Aggregation"
                    },
                    "mean_length_deviation":{
                        "$ref": "#/definitions/mean_length_deviation"
                    },
                    "vat_rate": {
                        "$ref": "#/definitions/vat_rate",
                        "title": "Mehrwertsteuersatz",
                        "description": "Mehrwertsteuersatz auf das beschriebene Holzprodukt"
                    }
                },
                "required": [
                    "wood_definition"
                ]
            },
            "properties": {},
            "minItems": 1
        },
        "wood_definition": {
            "type": "object",
            "properties": {
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
                "amount": {
                    "$ref": "#/definitions/amount_one",
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
                "title": "Datei",
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
                    "path"
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
            "format": "categories",
            "type": "object",
            "required": [
                "other_address",
                "measurement_data",
                "status_arr"
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
                "status_arr": {
                    "$ref": "#/definitions/status_arr",
                    "title": "Status",
                    "description": ""
                }
            }
        },
        "other_address": {
            "type": "array",
            "items": {
                "title": "andere Adresse",
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
            "title": "Rolle",
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
                "title": "Vermessung",
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
                    "business_transaction":{
                        "$ref": "#/definitions/business_transaction"
                    },
                    "other_file": {
                        "$ref": "#/definitions/other_file",
                        "title": "Dateianhang",
                        "description": ""
                    },
                    "industrie_measured": {
                        "$ref": "#/definitions/industrie_measured",
                        "title": "Werkmaß",
                        "description": ""
                    }
                },
                "required": [
                    "measurer",
                    "industrie_measured"
                ]
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
        "photo_device_id": {
            "type": "string",
            "maxLength": 30
        },
        "square_measure": {
            "type": "object",
            "properties": {
                "conversion_factor": {
                    "$ref": "#/definitions/conversion_factor",
                    "title": "Reduktionsfaktor",
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
        "mean_diameter": {
            "type": "number",
            "maximum": 200
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
        "real_length": {
            "type": "number"
        },
        "grade_diameter": {
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
            "title": "Stärkeklasse",
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
            "format": "categories",
            "type": "object",
            "required": [
                "transfer_address",
                "transfer_inf",
                "pile_data",
                "status_arr"
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
                "status_arr": {
                    "$ref": "#/definitions/status_arr",
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
                "other_det_base": {
                    "$ref": "#/definitions/string50",
                    "title": "Sonstige Bemessungsgrundlage",
                    "description": "Definition welche sonstige Bemessungsgrundlage herangezogen wird"
                },
                "trans_price_currency": {
                    "$ref": "#/definitions/currency",
                    "title": "Währung",
                    "description": "Angabe über die Währung in der die Transportkosten errechnet werden"
                }
            }
        },
        "trans_price_value": {
            "type": "number"
        },
        "trans_price_unit": {
            "title":"Preiseinheit",
            "enum": [
                "bei",
                "bet"
            ],
            "options": {
                "enum_titles": [
                    "Betrag je Einheit",
                    "Absolutbetrag"
                ]
            },
            "type": "string"
        },
        "currency": {
            "title": "Währung",
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
                    "type": "string",
                    "title": "Barcodetyp",
                    "description": "Angabe des verwendeten Barcodetyps, wie z.B. EAN, UPC, GS1, oder andere",
                    "enum": [
                        "EAN-8",
                        "EAN-13",
                        "UPC-A",
                        "UPC-E",
                        "QR-Code",
                        "DataMatrix-Code",
                        "MaxiCode",
                        "Aztec-Code",
                        "JAB-Code",
                        "Codablock"
                    ],
                    "options": {
                        "enum_titles": [
                            "EAN-8 (European Article Number)",
                            "EAN-13 (European Article Number)",
                            "UPC-A (Universal Product Code)",
                            "UPC-E (Universal Product Code)",
                            "QR-Code (Quick-Response-Code)",
                            "DataMatrix-Code",
                            "MaxiCode",
                            "Aztec-Code",
                            "JAB-Code",
                            "Codablock"
                        ]
                    }
                },
                "content": {
                    "$ref": "#/definitions/content",
                    "title": "Dateninhalt",
                    "description": "Klartext-Eingabe der zu verschlüsselnden Daten"
                }
            },
            "required":[
                "barcode_type",
                "content"
            ]
        },
        "content": {
            "type": "string",
            "maxLength": 255
        },
        "wood_allocation": {
            "type": "object",
            "format": "categories",
            "required": [
                "doc_type",
                "address",
                "wood_data",
                "status_arr"
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
                "status_arr": {
                    "$ref": "#/definitions/status_arr",
                    "title": "Status",
                    "description": ""
                }
            }
        },
        "doc_type": {
            "title": "Dokumentfunktion",
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
                "route_definition": {
                    "$ref": "#/definitions/route_definition",
                    "title": "An- und Abfuhr-Route"
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
            "title": "Lieferbedingungen",
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
            "type": "object",
            "properties": {
                "wood_id": {
                    "$ref": "#/definitions/wood_id",
                    "title": "Holznummer",
                    "description": ""
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
                "allocated_pile": {
                    "$ref": "#/definitions/allocated_pile",
                    "title": "Polter",
                    "description": ""
                }
            },
            "required": [
                "wood_id",
                "felling_date",
                "allocated_pile"
            ]
        },
        "felling_date": {
            "type": "string",
            "format": "date-time"
        },
        "business_transaction":{
            "title": "Geschäftsvorfall",
            "default": "VWe",
            "type": "string",
            "enum": [
                "VWa",
                "VWe"
            ],
            "options": {
                "enum_titles": [
                    "Verkauf nach Waldmaß",
                    "Verkauf nach Werksmaß"
                ]
            }
        },
        "allocated_pile": { 
            "type": "array",
            "items": {
                "title": "Vermessung & Polter",
                "type": "object",
                "properties": {
                    "wood_id": {
                        "$ref": "#/definitions/wood_id",
                        "title": "Holznummer",
                        "description": ""
                    },
                    "business_transaction":{
                        "$ref": "#/definitions/business_transaction"
                    },
                    "forest_measured": {
                        "$ref": "#/definitions/forest_measured",
                        "title": "Waldmaß",
                        "description": ""
                    },
                    "product_data": {
                        "$ref": "#/definitions/product_pile",
                        "title": "Polter",
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
        },
        "calibration":{
            "type":"object",
            "properties":{
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
                "calibrated_values": {
                    "type": "array",
                    "title": "Geeichte Messergebnisse",
                    "description": "Liste der Messergebnisse, die durch das geeichte Verfahren erhoben wurden.",
                    "items":{
                        "title": "Geeichte Messung",
                        "properties": {
                            "calibrated_value": {
                                "title": "Feldname",
                                "type": "string",
                                "enum": [
                                    "real_length",
                                    "grade_length",
                                    "diameter_length_grade",
                                    "diameter_length_forest",
                                    "diameter_length_top",
                                    "diameter_length_bottom",
                                    "shrinking",
                                    "crook",
                                    "crook_mid",
                                    "ovality",
                                    "ovality_relative",
                                    "count",
                                    "pile_front_area",
                                    "pile_back_area",
                                    "weighed_sample",
                                    "diameter_length",
                                    "stem_length"
                                ],
                                "options": {
                                    "enum_titles": [
                                        "Reale Länge",
                                        "Sortenlänge",
                                        "Sortendurchmesser",
                                        "Forstlicher Mittendurchmesser",
                                        "Zopfdurchmesser",
                                        "Stammfußsurchmesser",
                                        "Abholzigkeit",
                                        "Absolute Krümmung",
                                        "Mittlere Krümmung",
                                        "Absolute Ovalität",
                                        "Relative Ovalität",
                                        "Stückzahl",
                                        "Fläche Poltervorderseite",
                                        "Fläche Polterrückseite",
                                        "Trockengehalt",
                                        "Durchmesser an Position",
                                        "Stammlänge"
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            "required":[
                "calibration_id",
                "calibrated_until"
            ]
        },
        "diameter_length":{
            "title": "Durchmesser",
            "type": "array",
            "minItems":1,
            "items": {
                "title": "Durchmesser",
                "type": "object",
                "properties": {
                    "diameter_value": {
                        "type": "number",
                        "title": "Durchmesser",
                        "description": "Durchmesser in cm"
                    },
                    "under_bark": {
                        "type": "boolean",
                        "title": "Messung ohne Rinde",
                        "description": "Angabe, ob unter der Rinde gemessen wurde",
                        "format": "checkbox"
                    },
                    "diameter_position": {
                        "type": "number",
                        "title": "Position",
                        "description": "Position der Durchmesserermittlung, gemessen in cm vom dickeren Stammende"
                    }
                },
                "required": [
                    "diameter_value",
                    "diameter_position"
                ]
            }
        },
        "quality_definition":{
            "title": "Qualität",
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
                "quality_attribute": {
                    "title": "Qualitätsmerkmal",
                    "type": "string",
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
                    }
                }
            }
        },
        "haul_measured": {
            "type": "object",
            "title": "Holzmenge",
            "description": "Die beförderte Menge, definiert durch das Aufnahmeverfahren.",
            "additionalProperties": false,
            "oneOf": [
                {
                    "title": "Einzelstammvermessung",
                    "type": "object",
                    "properties": {
                        "measurement_type_single_log": {
                            "$ref": "#/definitions/measurement_type_single_log"
                        }
                    },
                    "required": ["measurement_type_single_log"]
                },
                {
                    "title": "Foto-Optische-Vermessung",
                    "type": "object",
                    "properties": {
                        "measurement_type_photo_optical": {
                            "$ref": "#/definitions/measurement_type_photo_optical"
                        }
                    },
                    "required": ["measurement_type_photo_optical"]
                },
                {
                    "title": "Kran-Vermessung",
                    "type": "object",
                    "properties": {
                        "measurement_type_crane": {
                            "$ref": "#/definitions/measurement_type_crane"
                        }
                    },
                    "required": ["measurement_type_crane"]
                }
            ]
        },
        "forest_measured":{
            "type": "object",
            "title": "Waldmaß",
            "oneOf": [
                {
                    "title": "Einzelstammvermessung",
                    "type": "object",
                    "properties": {
                        "measurement_type_single_log": {
                            "$ref": "#/definitions/measurement_type_single_log"
                        }
                    },
                    "required": ["measurement_type_single_log"]
                },
                {
                    "title": "Stirnflächenverfahren",
                    "type": "object",
                    "properties": {
                        "measurement_type_surfaces": {
                            "$ref": "#/definitions/measurement_type_surfaces"
                        }
                    },
                    "required": ["measurement_type_surfaces"]
                },
                {
                    "title": "Mittendurchmesser-Stichprobe",
                    "type": "object",
                    "properties": {
                        "measurement_type_mid_sample": {
                            "$ref": "#/definitions/measurement_type_mid_sample"
                        }
                    },
                    "required": ["measurement_type_mid_sample"]
                },
                {
                    "title": "Sektions-Raummaßverfahren",
                    "type": "object",
                    "properties": {
                        "measurement_type_sectional": {
                            "$ref": "#/definitions/measurement_type_sectional"
                        }
                    },
                    "required": ["measurement_type_sectional"]
                },
                {
                    "title": "Foto-Optische-Vermessung",
                    "type": "object",
                    "properties": {
                        "measurement_type_photo_optical": {
                            "$ref": "#/definitions/measurement_type_photo_optical"
                        }
                    },
                    "required": ["measurement_type_photo_optical"]
                },
                {
                    "title": "Harvester-Maß",
                    "type": "object",
                    "properties": {
                        "measurement_type_harvester": {
                            "$ref": "#/definitions/measurement_type_harvester"
                        }
                    },
                    "required": ["measurement_type_harvester"]
                },
                {
                    "title": "Kran-Vermessung",
                    "type": "object",
                    "properties": {
                        "measurement_type_crane": {
                            "$ref": "#/definitions/measurement_type_crane"
                        }
                    },
                    "required": ["measurement_type_crane"]
                }
            ]
        },
        "industrie_measured":{
            "type": "object",
            "title": "Werkmaß",
            "oneOf": [
                {
                    "title": "Einzelstamm-Werk",
                    "type": "object",
                    "properties": {
                        "measurement_type_single_log_industrie": {
                            "$ref": "#/definitions/measurement_type_single_log_industrie"
                        }
                    },
                    "required": ["measurement_type_single_log_industrie"]
                },
                {
                    "title": "Foto-Optische-Vermessung",
                    "type": "object",
                    "properties": {
                        "measurement_type_photo_optical": {
                            "$ref": "#/definitions/measurement_type_photo_optical"
                        }
                    },
                    "required": ["measurement_type_photo_optical"]
                },
                {
                    "title": "Gravimetrische-Vermessung",
                    "type": "object",
                    "properties": {
                        "measurement_type_gravimetric": {
                            "$ref": "#/definitions/measurement_type_gravimetric"
                        }
                    },
                    "required": ["measurement_type_gravimetric"]
                },
                {
                    "title": "Harvester-Maß",
                    "type": "object",
                    "properties": {
                        "measurement_type_harvester": {
                            "$ref": "#/definitions/measurement_type_harvester"
                        }
                    },
                    "required": ["measurement_type_harvester"]
                }
            ]
        },
        "measurement_type_single_log":{
            "title": "Einzelstamm",
            "type": "object",
            "properties": {
                "measurement_id": {
                    "title": "Messprotokollnummer",
                    "type": "string"
                },
                "measurement_datetime": {
                    "title": "Vermessungsdatum",
                    "type": "string",
                    "format": "datetime-local"
                },
                "log": {
                    "type":"array",
                    "title": "Stamm",
                    "format": "tabs",
                    "minItems": 1,
                    "items": {
                        "title": "Stamm",
                        "type": "object",
                        "properties": {
                            "stam_id": { 
                                "title": "Stammnummer",
                                "type": "string" 
                            },
                            "species": {
                                "$ref": "#/definitions/species",
                                "title": "Holzart",
                                "description": "Angabe zur Holzart"
                            },
                            "stem_length": {
                                "title": "Stammlänge",
                                "$ref": "#/definitions/integer"
                            },
                            "diameter": {
                                "title": "Stammdurchmesser",
                                "$ref": "#/definitions/integer"
                            },
                            "thickness_class": {
                                "$ref": "#/definitions/thickness_class",
                                "title": "Stärkeklasse",
                                "description": "Klassifizierung der mittleren Stammstärke"
                            },
                            "part_no": {
                                "$ref": "#/definitions/part_no",
                                "title": "Stammabschnittsnummer",
                                "description": "Nummerierung des Klammerstammstückes (1 = Erdstammstück, 2 = erstes Folgestück, etc.)"
                            },
                            "quality_definition":{
                                "$ref": "#/definitions/quality_definition"
                            }
                        },
                        "required": [
                            "species",
                            "stem_length",
                            "diameter"
                        ]
                    }
                }
            },
            "required": [
            ]
        },
        "measurement_type_surfaces":{
            "title": "Stirnflächenverfahren",
            "type": "object",
            "properties": {
                "measurement_id": {
                    "title": "Messprotokollnummer",
                    "type": "string"
                },
                "measurement_datetime": {
                    "title": "Vermessungsdatum",
                    "type": "string",
                    "format": "datetime-local"
                },
                "estimate": {
                    "type":"array",
                    "title": "Holzart/Qualität",
                    "minItems": 1,
                    "format": "tabs",
                    "items": {
                        "title": "Holzart/Qualität",
                        "type": "object",
                        "properties": {
                            "species_quality": { 
                                "title": "Anteil",
                                "description": "Anteil der Kombination von Holzart und Qualität in %",
                                "type": "number"
                            },
                            "species": {
                                "$ref": "#/definitions/species",
                                "title": "Holzart",
                                "description": "Angabe zur Holzart"
                            },
                            "quality_definition":{
                                "$ref": "#/definitions/quality_definition"
                            }
                        },
                        "required": [
                            "species"
                        ]
                    }
                },
                "count": { 
                    "title": "Stückzahl",
                    "type": "number"
                },
                "pieces": { 
                    "title": "Abstand der Markierungsstriche",
                    "type": "number"
                },
                "sort_length": { 
                    "title": "Sortenlänge",
                    "type": "number"
                },
                "pile_length": { 
                    "title": "Polterlänge",
                    "type": "number"
                },
                "pile_front": {
                    "title": "Poltervorderseite",
                    "type": "array",
                    "minItems": 1,
                    "items":{
                        "title": "Durchmesser",
                        "type": "number"
                    }
                },
                "pile_back": {
                    "title": "Polterhinterseite",
                    "type": "array",
                    "minItems": 1,
                    "default": 0,
                    "items":{
                        "title": "Durchmesser",
                        "type": "number"
                    }
                }
            },
            "required": [
            ]
        },
        "measurement_type_mid_sample":{
            "title": "Mittendurchmesser-Stichprobe",
            "type": "object",
            "properties": {
                "measurement_id": {
                    "title": "Messprotokollnummer",
                    "type": "string"
                },
                "measurement_datetime": {
                    "title": "Vermessungsdatum",
                    "type": "string",
                    "format": "datetime-local"
                },
                "estimate": {
                    "type":"array",
                    "title": "Holzart/Qualität",
                    "minItems": 1,
                    "format": "tabs",
                    "items": {
                        "title": "Holzart/Qualität",
                        "type": "object",
                        "properties": {
                            "species_quality": { 
                                "title": "Anteil",
                                "description": "Anteil der Kombination von Holzart und Qualität in %",
                                "type": "number"
                            },
                            "species": {
                                "$ref": "#/definitions/species",
                                "title": "Holzart",
                                "description": "Angabe zur Holzart"
                            },
                            "quality_definition":{
                                "$ref": "#/definitions/quality_definition"
                            }
                        },
                        "required": [
                            "species"
                        ]
                    }
                },
                "count": { 
                    "title": "Stückzahl",
                    "type": "number"
                },
                "sort_length": { 
                    "title": "Sortenlänge",
                    "type": "number"
                },
                "sample": {
                    "title": "Stichprobe",
                    "type": "array",
                    "minItems": 1,
                    "items":{
                        "title": "Durchmesser",
                        "type": "number"
                    }
                }
            }
        },
        "measurement_type_sectional":{
            "title": "Mittendurchmesser-Stichprobe",
            "type": "object",
            "properties": {
                "measurement_id": {
                    "title": "Messprotokollnummer",
                    "type": "string"
                },
                "measurement_datetime": {
                    "title": "Vermessungsdatum",
                    "type": "string",
                    "format": "datetime-local"
                },
                "estimate": {
                    "type":"array",
                    "title": "Holzart/Qualität",
                    "minItems": 1,
                    "items": {
                        "title": "Holzart/Qualität",
                        "type": "object",
                        "properties": {
                            "species_quality": { 
                                "title": "Anteil",
                                "description": "Anteil der Kombination von Holzart und Qualität in %",
                                "type": "number"
                            },
                            "species": {
                                "$ref": "#/definitions/species",
                                "title": "Holzart",
                                "description": "Angabe zur Holzart"
                            },
                            "quality_definition":{
                                "$ref": "#/definitions/quality_definition"
                            },
                            "conversion_factor_qm":{
                                "$ref": "#/definitions/conversion_factor_qm"
                            }
                        },
                        "required": [
                            "species_quality",
                            "species"
                        ]
                    }
                },
                "count": { 
                    "title": "Stückzahl",
                    "type": "integer"
                },
                "sort_length": { 
                    "title": "Sortenlänge",
                    "type": "number"
                },
                "sample": {
                    "title": "Sektionen",
                    "type": "array",
                    "minItems": 1,
                    "items":{
                        "title": "Sektionshöhe",
                        "type": "number"
                    }
                }
            },
            "required": [
                "sample",
                "count",
                "sort_length"
            ]
        },
        "measuring_technique_photo_optical": {
            "title": "Messtechnik",
            "enum": [
                "foha",
                "foim",
                "fomo"
            ],
            "options": {
                "enum_titles": [
                    "Foto-optisches Messverfahren (handgeführtes Gerät)",
                    "Foto-optisches Messverfahren (montiertes/immobiles Gerät)",
                    "Foto-optisches Messverfahren (montiertes/mobiles Gerät)"
                ]
            },
            "type": "string"
        },
        "measurement_type_photo_optical":{
            "title": "Foto-Optische-Vermessung",
            "type": "object",
            "properties": {
                "measuring_technique_photo_optical":{
                    "title": "Messtechnik",
                    "$ref": "#/definitions/measuring_technique_photo_optical",
                    "type": "string"
                },
                "measurement_id": {
                    "title": "Messprotokollnummer",
                    "type": "string"
                },
                "measurement_datetime": {
                    "title": "Vermessungsdatum",
                    "type": "string",
                    "format": "datetime-local"
                },
                "calibration": {
                    "title": "Eichung",
                    "$ref": "#/definitions/calibration"
                },
                "estimate": {
                    "type":"array",
                    "title": "Holzart/Qualität",
                    "minItems": 1,
                    "items": {
                        "title": "Holzart/Qualität",
                        "type": "object",
                        "properties": {
                            "species_quality": { 
                                "title": "Anteil",
                                "description": "Anteil der Kombination von Holzart und Qualität in %",
                                "type": "number"
                            },
                            "species": {
                                "$ref": "#/definitions/species",
                                "title": "Holzart",
                                "description": "Angabe zur Holzart"
                            },
                            "quality_definition":{
                                "$ref": "#/definitions/quality_definition"
                            },
                            "conversion_factor_qm":{
                                "$ref": "#/definitions/conversion_factor_qm"
                            }
                        },
                        "required": [
                            "species_quality",
                            "species"
                        ]
                    }
                },
                "count": { 
                    "title": "Stückzahl",
                    "type": "integer"
                },
                "sort_length": { 
                    "title": "Sortenlänge",
                    "type": "number"
                },
                "pile_front_area": {
                    "title": "Fläche Poltervorderseite",
                    "description": "In qm",
                    "type": "number"
                },
                "pile_back_area": {
                    "title": "Fläche Polterrückseite",
                    "description": "In qm",
                    "type": "number"
                }
            },
            "required": [
                "sample",
                "count",
                "sort_length"
            ]
        },
        "measurement_type_harvester":{
            "title": "Harvester-Maß",
            "type": "object",
            "properties": {
                "measurement_id": {
                    "title": "Messprotokollnummer",
                    "type": "string"
                },
                "measurement_datetime": {
                    "title": "Vermessungsdatum",
                    "type": "string",
                    "format": "datetime-local"
                },
                "log": {
                    "type":"array",
                    "title": "Stamm",
                    "format": "tabs",
                    "minItems": 1,
                    "items": {
                        "title": "Stamm",
                        "type": "object",
                        "properties": {
                            "stam_id": { 
                                "title": "Stammnummer",
                                "type": "string" 
                            },
                            "operator":{
                                "title": "Vermesser",
                                "default":"machine",
                                "type": "string",
                                "enum": [
                                    "machine",
                                    "operator",
                                    "auditor"
                                ],
                                "options": {
                                    "enum_titles": [
                                        "Maschine",
                                        "Fahrer",
                                        "Extern"
                                    ]
                                }
                            },
                            "species": {
                                "$ref": "#/definitions/species",
                                "title": "Holzart",
                                "description": "Angabe zur Holzart"
                            },
                            "stem_length": {
                                "title": "Stammlänge",
                                "type": "number" 
                            },
                            "diameter_length": {
                                "$ref": "#/definitions/diameter_length"
                            },
                            "quality_definition":{
                                "$ref": "#/definitions/quality_definition"
                            }
                        },
                        "required": [
                            "species",
                            "stem_length",
                            "diameter_length"
                        ]
                    }
                }
            }
        },
        "measurement_type_crane":{
            "title": "Kran-Vermessung",
            "type": "object",
            "properties": {
                "measurement_id": {
                    "title": "Messprotokollnummer",
                    "type": "string"
                },
                "measurement_datetime": {
                    "title": "Vermessungsdatum",
                    "type": "string",
                    "format": "datetime-local"
                },
                "sample": {
                    "type":"array",
                    "title": "Stichproben",
                    "format": "tabs",
                    "minItems": 1,
                    "items": {
                        "title": "Stichprobe",
                        "type": "object",
                        "properties": {
                            "species": {
                                "$ref": "#/definitions/species",
                                "title": "Holzart",
                                "description": "Angabe zur Holzart"
                            },
                            "weighed_sample": {
                                "title": "Gewogenes Holz der Stichprobe",
                                "description": "t lutro mit Rinde",
                                "type": "number"
                            },
                            "stem": {
                                "title": "Stamm",
                                "type": "array",
                                "minItems": 1,
                                "items":{
                                    "title": "Stamm",
                                    "properties": {
                                        "stem_length": {
                                            "title": "Stammlänge",
                                            "type": "number" 
                                        },
                                        "diameter_length": {
                                            "$ref": "#/definitions/diameter_length"
                                        },
                                        "quality_definition":{
                                            "$ref": "#/definitions/quality_definition"
                                        }
                                    }
                                }
                            }
                        },
                        "required": [
                            "species",
                            "stem_length",
                            "diameter_length"
                        ]
                    }
                },
                "conversion_factor_qm_t": {
                    "title": "Hiebsbezogener Umrechnungsfaktor",
                    "description": "Fm ohne Rinde / t lutro mit Rinde",
                    "type": "number"
                }
            },
            "required": [
                "conversion_factor_qm_t",
                "sample"
            ]
        },
        "measuring_technique_single_log_industrie": {
            "enum": [
                "fewi",
                "vawi"
            ],
            "options": {
                "enum_titles": [
                    "fester Winkel",
                    "variabler Winkel"
                ]
            },
            "type": "string"
        },
        "measurement_type_single_log_industrie":{
            "title": "Einzelstammvermessung",
            "type": "object",
            "properties": {
                "measuring_technique_single_log_industrie":{
                    "title": "Messtechnik",
                    "$ref": "#/definitions/measuring_technique_single_log_industrie",
                    "type": "string"
                },
                "measurement_id": {
                    "title": "Messprotokollnummer",
                    "type": "string"
                },
                "measurement_datetime": {
                    "title": "Vermessungsdatum",
                    "type": "string",
                    "format": "datetime-local"
                },
                "screening_valid_to": {
                    "$ref": "#/definitions/screening_valid_to",
                    "title": "Forst-Sortierprüfung gültig bis",
                    "description": "Datum bis zu dem die forstliche Sortierprüfung des Gerätes gültig ist"
                },
                "calibration": {
                    "title": "Eichung",
                    "$ref": "#/definitions/calibration"
                },
                "log_industrie": {
                    "type":"array",
                    "title": "Stamm",
                    "format": "tabs",
                    "minItems": 1,
                    "items": {
                        "title": "Stamm",
                        "type": "object",
                        "properties": {
                            "stam_id": { 
                                "title": "Stammnummer",
                                "type": "string" 
                            },
                            "species": {
                                "$ref": "#/definitions/species",
                                "title": "Holzart",
                                "description": "Angabe zur Holzart"
                            },
                            "real_length": {
                                "type": "number",
                                "title": "Reale Länge",
                                "description": "Physische Länge des Stammes"
                            },
                            "grade_length": {
                                "type": "number",
                                "title": "Sortenlänge",
                                "description": "Längenklasse des Holzes gemäß Sortierung"
                            },
                            "grade_diameter_one": {
                                "$ref": "#/definitions/integer",
                                "title": "Sortendurchmesser 1",
                                "description": "(Erstes) Messergebnis des Sortendurchmessers"
                            },
                            "grade_diameter_two": {
                                "$ref": "#/definitions/integer",
                                "title": "Sortendurchmesser 2",
                                "description": "Zweites Messergebnis des Sortendurchmessers (Bei kreuzweiser Messung)"
                            },
                            "grade_diameter_three": {
                                "$ref": "#/definitions/integer",
                                "title": "Sortendurchmesser 3",
                                "description": "(Erstes) Messergebnis des Sortendurchmessers"
                            },
                            "grade_diameter_four": {
                                "$ref": "#/definitions/integer",
                                "title": "Sortendurchmesser 4",
                                "description": "Zweites Messergebnis des Sortendurchmessers (Bei kreuzweiser Messung)"
                            },
                            "diameter_length_forest": {
                                "title": "Forstlicher Mittendurchmesser",
                                "description": "Mittendurchmesser des Stammes, forstlich abgerundet",
                                "$ref": "#/definitions/integer"
                            },
                            "top_diameter": {
                                "$ref": "#/definitions/integer",
                                "title": "Zopfdurchmesser",
                                "description": "Durchmesser des dünnen Stammendes"
                            },
                            "bottom_diameter": {
                                "$ref": "#/definitions/integer",
                                "title": "Stammfußdurchmesser",
                                "description": "Durchmesser des dicken Stammendes"
                            },
                            "quality_definition":{
                                "$ref": "#/definitions/quality_definition"
                            },
                            "shrinking": {
                                "$ref": "#/definitions/shrinking",
                                "title": "Abholzigkeit",
                                "description": "Durchmesserverringerung in Zentimeter je Meter [cm/m]"
                            },
                            "crook": {
                                "$ref": "#/definitions/crook",
                                "title": "Absolute Krümmung",
                                "description": "Zentimeterabweichung der Stammmitte von der Stammgeraden je Meter [cm/m]"
                            },
                            "crook_mid": {
                                "type": "number",
                                "title": "Mittlere Krümmung",
                                "description": "Quotient des Mittelwertes der überschreitenden Krümmungen und des Mittelwertes der beiden Quelldurchmesser [%]"
                            },
                            "ovality": {
                                "$ref": "#/definitions/ovality",
                                "title": "Absolute Ovalität",
                                "description": "Verhältnis des größten zum geringsten Durchmesser in Stammmitte bei kreuzweiser Vermessung [cm/cm]"
                            },
                            "ovality_relative": {
                                "$ref": "#/definitions/ovality",
                                "title": "Relative Ovalität",
                                "description": "Quotient aus ovalitätsbedingter Ringkreisfläche und der realen Mittendurchmesserkreisfläche [%]"
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
                            "species",
                            "stem_length",
                            "diameter_length",
                            "grade_diameter_one",
                            "single_log_thickness_class",
                            "diameter_length_top",
                            "crook_mid",
                            "ovality_relative"
                        ]
                    }
                }
            },
            "required":[
                "measurement_id",
                "measurement_datetime"
            ]
        },
        "measurement_type_gravimetric":{
            "title": "Gravimetrische-Vermessung",
            "type": "object",
            "properties": {
                "measurement_id": {
                    "title": "Messprotokollnummer",
                    "type": "string"
                },
                "measurement_datetime": {
                    "title": "Vermessungsdatum",
                    "type": "string",
                    "format": "datetime-local"
                },
                "calibration": {
                    "title": "Geeichte Geräte",
                    "type": "array",
                    "items":{
                        "title": "Geeichtes Gerät",
                        "type": "object",
                        "$ref": "#/definitions/calibration"
                    }
                },
                "sample": {
                    "type":"array",
                    "title": "Messungen",
                    "format": "tabs",
                    "minItems": 1,
                    "items": {
                        "title": "Messung",
                        "type": "object",
                        "properties": {
                            "species": {
                                "$ref": "#/definitions/species",
                                "title": "Holzart",
                                "description": "Angabe zur Holzart"
                            },
                            "weighed_sample": {
                                "title": "Trockengehalt",
                                "description": "Prozentualer Anteil der Trockenmasse am Poltergesamtgewicht",
                                "type": "number"
                            },
                            "weighed_amount": {
                                "$ref": "#/definitions/integer",
                                "title": "Gewicht",
                                "description": "Gemessenes Gewicht in Tonnen"
                            },
                            "quality_definition":{
                                "$ref": "#/definitions/quality_definition"
                            }
                        },
                        "required": [
                            "species",
                            "stem_length",
                            "diameter_length"
                        ]
                    }
                },
                "conversion_factor_qm_t": {
                    "title": "hiebsbezogener Umrechnungsfaktor",
                    "description": "Fm ohne Rinde / t lutro mit Rinde",
                    "type": "number"
                }
            },
            "required": [
                "conversion_factor_qm_t",
                "sample"
            ]
        },
        "route_definition":{
            "properties": {
                "crs": {
                    "$ref": "#/definitions/crs"
                },
                "route": {
                    "type": "array",
                    "minItems": 2,
                    "description": "Strecke auf der Karte",
                    "items":{
                        "$ref": "#/definitions/lon_lat" 
                    }
                }
            },
            "required":["route"]
        },
        "lon_lat": {
            "title": "Koordinatenpaar",
            "description":"Longitude, Latitude",
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
                }
            }
        },
        "integer": {
            "type": "number",
            "maximum": 255
        },
        "string255": {
            "type": "string",
            "maxLength": 255
        },
        "string50": {
            "type": "string",
            "maxLength": 50
        },
        "string36": {
            "type": "string",
            "maxLength": 36
        },
        "string": {
            "type": "string"
        },
        "image_encode": {
            "type": "string",
            "enum": [
                "base64"
            ],
            "enum_titles": [
                "Base64"
            ]
        }
    },
    "properties": {
        "document": {
            "$ref": "#/definitions/document"
        }
    },
    "required": [
        "document"
    ]
}