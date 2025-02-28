import type { LimitedTimeOfferFragmentResponse } from '../graphql/fragments';

export function getActiveOffer(
  offers: LimitedTimeOfferFragmentResponse[],
): LimitedTimeOfferFragmentResponse | undefined {
  const activeOffer = offers.find((offer) => {
    // const now = window.Temporal.Now.instant();
    // const startDate = window.Temporal.Instant.from(offer.startDate);
    // const endDate = window.Temporal.Instant.from(offer.endDate);

    // return window.Temporal.Instant.compare(startDate, now) < 0 && window.Temporal.Instant.compare(now, endDate) < 0;
    
    // tmp
    const now = String(Number(Date.now()));
    const startDate = offer.startDate;
    const endDate = offer.endDate;

    return Number(startDate) - Number(now) < 0 && Number(now) - Number(endDate) < 0;
  });

  return activeOffer;
}
