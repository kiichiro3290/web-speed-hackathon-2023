import { Temporal } from '@js-temporal/polyfill';

const TZ = process.env.TZ ?? 'Asia/Tokyo';
const BASE_DATE = process.env.SEED_BASE_UNIXTIME
  ? Temporal.Instant.fromEpochMilliseconds(Number(process.env.SEED_BASE_UNIXTIME))
  : Temporal.Now.instant();
  
console.log(TZ)
console.log(process.env.SEED_BASE_UNIXTIME)
console.log(BASE_DATE.toZonedDateTimeISO(TZ).withPlainTime())


const startDate = BASE_DATE.toZonedDateTimeISO(TZ).add({ days: 1 }).withPlainTime({
            hour: 2,
            minute: 0,
            second: 0,
        });

// 正解
const newStartDate = startDate.toInstant().toString({ timeZone: Temporal.TimeZone.from('UTC') })
console.log('answer', newStartDate)

// 置換後
const TMP_BASE_DATE = process.env.SEED_BASE_UNIXTIME ? new Date(Number(process.env.SEED_BASE_UNIXTIME)) : new Date()
// jsのDateオブジェクトの時刻は，process.env.TZの時間になるらしいので，日本時間になってた
// console.log('tmp', TMP_BASE_DATE)


// const index = 4
// const offerHour = index % 24;
// for (let offset = -10; offset <= 10; offset++) {
//     // 東京のタイムゾーンに変換する
//     // オフセットを追加する
// const offset = 2;
// const offerHour = 4;
// const a = BASE_DATE.toZonedDateTimeISO(TZ).add({ days: offset }).withPlainTime({
//     hour: offerHour,
//     minute: 0,
//     second: 0,
// });

// const tmpStartDate = new Date(TMP_BASE_DATE)
// tmpStartDate.setDate(tmpStartDate.getDate() + offset)
// tmpStartDate.setHours(offerHour)
// const tmpEndDate = new Date(TMP_BASE_DATE)
// tmpEndDate.setDate(tmpEndDate.getDate() + offset)
// tmpEndDate.setHours(offerHour + 2)
// console.log('tmp',tmpStartDate.toString( ))
// console.log('tmp', tmpEndDate)

// const endDate = a.add({ hours: 2 });
// const ab = a.toInstant().toString({ timeZone: Temporal.TimeZone.from('UTC') });
// const newEndDate = endDate.toInstant().toString({ timeZone: Temporal.TimeZone.from('UTC') });
// console.log('start',ab)
// console.log('end', newEndDate)


// なぜか去年の元日を取得
const START_OF_LAST_YEAR = BASE_DATE.toZonedDateTimeISO(TZ)
    .subtract({ years: 1 })
    .with({ day: 1, month: 1 }) // ただの上書き
    .withPlainTime();

const tmpLastYear = TMP_BASE_DATE.getFullYear() - 1
const TMP_START_OF_LAST_YEAR = new Date(`${tmpLastYear}-01-01`);
console.log(START_OF_LAST_YEAR.toString())
console.log('tmp_last_year',TMP_START_OF_LAST_YEAR)

const length = 3
const index = 2
const duration = BASE_DATE.since(START_OF_LAST_YEAR.toInstant()).round('second').total('second');
const tmpDuration = Math.floor(Number(TMP_BASE_DATE) / 1000) - Math.floor(Number(TMP_START_OF_LAST_YEAR) / 1000) + (9 * 3600)
console.log(duration)
console.log('tmp', tmpDuration)
const interval = Math.floor(duration / length);
console.log(interval)
const tmpInterval = Math.floor(tmpDuration / length);
console.log('tmp', tmpInterval)


const postedAt = START_OF_LAST_YEAR.add({ seconds: interval * index })
      .toInstant()
      .toString({ timeZone: Temporal.TimeZone.from('UTC') });

const tmpPostedAt = new Date(TMP_START_OF_LAST_YEAR)
tmpPostedAt.setSeconds(tmpPostedAt.getSeconds() + tmpInterval * index)
tmpPostedAt.setHours(tmpPostedAt.getHours() - 9)
console.log(postedAt)
console.log('tmp', tmpPostedAt)
