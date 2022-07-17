import { List } from "../../shared-components/list/list"

const TermsConditionsStrings=[
    'All free tickets expire after 60 days after issuance',
    'Excludes alcohol, vouchers expire 60 days after issuance',
    'Convenience Fee & upgrade Fees apply. Excludes holiday',
    'Every 500 points can be redeemed for tickets or for free food & beverage vouchers'
]
export const TermsConditions=()=>(
    <List 
    listItems={TermsConditionsStrings}
    color="grey"
    />
)

