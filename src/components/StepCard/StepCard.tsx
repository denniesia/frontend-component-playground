import { stepCardStyles } from './StepCard.styles';
import type { StepCardProps } from './StepCard.types';

/**
 * TODO: build the StepCard.
 *
 * white card, radius-card, row: a 40px tertiary circle with the step number, then the
 * title and description.
 */
const StepCard = (props: StepCardProps) => {
    const { title, description, step} = props;
    const styles = stepCardStyles();

    return (
        <div className={styles.base()}>
            <div className={styles.row()}>
                <div className={styles.marker()}>{step}</div>
                <div className={styles.content()}>
                    <h3 className={styles.title()}>{title}</h3>
                    <div className={styles.text()}>{description}</div>
                </div>
            </div>
        </div>
    );
};
export default StepCard;
