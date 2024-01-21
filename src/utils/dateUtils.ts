import moment from "moment";

const formatDateTime = (datetimeString: string) =>
  moment(datetimeString).format("lll");

const formatDate = (datetimeString: string) =>
  moment(datetimeString).format("ll");

const formatTime = (datetimeString: string) =>
  moment(datetimeString).format("LT");

export { formatDate, formatTime, formatDateTime };
