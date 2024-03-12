const mongoose = require("mongoose");

mongoose.pluralize(null);
const Schema = mongoose.Schema;
// some fields are remaining to add
const LDSHRM_PAYROLL_TicketRates = mongoose.Schema(
  {
    tktRatesId: {
      type: Number,
      required: true,
      unique: true,
    },
    tktRatesDxb: {
      type: Number,
      default: Null,
    },
    tktRatesTravelSector: {
      type: Number,
      default: Null,
    },
    tktRatesFarecodeId: {
      type: Number,
      default: Null,
    },
    tktRatesTravelclassId: {
      type: Number,
      default: Null,
    },
    tktRatesEffectiveStart: {
      type: Date,
      default: Null,
    },
    tktRatesEffectiveEnd: {
      type: Date,
      default: Null,
    },
    tktRatesCreatedById: {
      type: Number,
      default: Null,
    },
    tktRatesCreatedDate: {
      type: Date,
      default: Null,
    },
    tktRatesModifiedById: {
      type: Number,
      default: Null,
    },
    tktRatesCreatedDate: {
      type: Date,
      default: Null,
    },
    tktRatesModifiedDate: {
      type: Date,
      default: Null,
    },
    tktRatesIsDeleted: {
      type: Boolean,
      default: Null,
    },
    tktRatesCultureId: {
      type: int,
      default: Null,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model(
  "LDSHRM_PAYROLL_TicketRates",
  LDSHRM_PAYROLL_TicketRates
);
