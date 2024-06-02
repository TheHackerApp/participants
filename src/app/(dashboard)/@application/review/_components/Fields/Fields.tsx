import { ReactElement } from 'react';

import { Education, Gender, RaceEthnicity } from '@/graphql';
import { getClient } from '@/graphql/clients/server';

import Date from './_components/Date';
import Group from './_components/Group';
import Row from './_components/Row';
import { DraftApplicationDocument } from './DraftApplication.graphql';

const Fields = async (): Promise<ReactElement> => {
  const client = getClient();
  const { data } = await client.query({ query: DraftApplicationDocument });

  return (
    <div className="space-y-4">
      <Group name="About You" href="/about">
        <Row label="Given name" value={data.me.givenName} required />
        <Row label="Family name" value={data.me.familyName} required />
        <Row label="Gender" value={data.draftApplication?.gender} render={(value) => GENDER_NAMES[value]} required />
        <Row
          label="Race / Ethnicity"
          value={data.draftApplication?.raceEthnicity}
          render={(value) => RACE_ETHNICITY_NAMES[value]}
          required
        />
        <Row
          label="Birthday"
          value={data.draftApplication?.dateOfBirth}
          render={(value) => <Date value={value} />}
          required
        />
      </Group>
      <Group name="Education" href="/education">
        <Row label="Graduation year" value={data.draftApplication?.graduationYear} required />
        <Row
          label="Level of study"
          value={data.draftApplication?.education}
          render={(value) => EDUCATION_NAMES[value]}
          required
        />
        <Row label="Major" value={data.draftApplication?.major} />
      </Group>
      <Group name="Experience" href="/experience">
        <Row label="GitHub / GitLab / BitBucket URL" value={data.draftApplication?.vcsUrl} />
        <Row label="Portfolio URL" value={data.draftApplication?.portfolioUrl} />
        <Row label="Devpost URL" value={data.draftApplication?.devpostUrl} />
        <Row
          label="Share profile with sponsors/partners"
          value={data.draftApplication?.shareInformation}
          render={(value) => (value ? 'Yes' : 'No')}
        />
      </Group>
      <Group name="Shipping" href="/shipping">
        <Row label="Address line 1" value={data.draftApplication?.addressLine1} required />
        <Row label="Address line 2" value={data.draftApplication?.addressLine2} />
        <Row label="Address line 3" value={data.draftApplication?.addressLine3} />
        <Row label="City" value={data.draftApplication?.locality} />
        <Row label="State / Province" value={data.draftApplication?.administrativeArea} />
        <Row label="Postal code" value={data.draftApplication?.postalCode} required />
        <Row label="Country" value={data.draftApplication?.country} required />
      </Group>
    </div>
  );
};

const GENDER_NAMES: Record<Gender, string> = {
  [Gender.Male]: 'Male',
  [Gender.Female]: 'Female',
  [Gender.NonBinary]: 'Non-binary',
  [Gender.Other]: 'Other',
};

const RACE_ETHNICITY_NAMES: Record<RaceEthnicity, string> = {
  [RaceEthnicity.AsianIndian]: 'Asian Indian',
  [RaceEthnicity.Black]: 'Black or African',
  [RaceEthnicity.Chinese]: 'Chinese',
  [RaceEthnicity.Filipino]: 'Filipino',
  [RaceEthnicity.Guamanian]: 'Guamanian or Chamorro',
  [RaceEthnicity.Hispanic]: 'Hispanic / Latino / Spanish Origin',
  [RaceEthnicity.Japanese]: 'Japanese',
  [RaceEthnicity.Korean]: 'Korean',
  [RaceEthnicity.MiddleEastern]: 'Middle Eastern',
  [RaceEthnicity.NativeAmerican]: 'Native American or Alaskan Native',
  [RaceEthnicity.NativeHawaiian]: 'Native Hawaiian',
  [RaceEthnicity.Samoan]: 'Samoan',
  [RaceEthnicity.Vietnamese]: 'Vietnamese',
  [RaceEthnicity.White]: 'White',
  [RaceEthnicity.OtherAsian]: 'Other Asian (Thai, Cambodian, etc.)',
  [RaceEthnicity.OtherPacificIslander]: 'Other Pacific Islander',
  [RaceEthnicity.Other]: 'Other',
};

const EDUCATION_NAMES: Record<Education, string> = {
  [Education.BelowSecondary]: 'Less than Secondary / High School',
  [Education.Secondary]: 'Secondary / High School',
  [Education.UndergraduateTwoYear]: 'Undergraduate University (2 year)',
  [Education.UndergraduateThreeYearPlus]: 'Undergraduate University (3+ year)',
  [Education.Graduate]: 'Graduate University (Masters, Doctoral, etc.)',
  [Education.Bootcamp]: 'Code School / Bootcamp',
  [Education.Vocational]: 'Other Vocational / Trade Program or Apprenticeship',
  [Education.Other]: 'Other',
  [Education.NonStudent]: "I'm not currently a student",
};

export default Fields;
