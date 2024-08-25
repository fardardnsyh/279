import BudgetItem from "../budgetItem/budgetItem";

export default function BudgetSection ({ 
    section_type, 
    budget, 
    categories, 
    setUpdateRequired,
    setErrors
 }) {

    const budgetItems = budget.filter((budgetItem) => (
        budgetItem.type === section_type
    ))

    return (
        <section 
            className={ section_type.toLowerCase() }
            data-cy={ section_type.toLowerCase() + '-section' } >
            { budgetItems.map((budgetItem) => (
                <BudgetItem
                    key={ budgetItem.id }
                    budgetItem={ budgetItem }
                    categories={ categories } 
                    setUpdateRequired={ setUpdateRequired }
                    setErrors={ setErrors }/>
            ))}
        </section>
    )
}