# Write your MySQL query statement below
SELECT customer_id, COUNT(*) as count_no_trans
FROM Visits
LEFT JOIN transactions ON  visits.visit_id = transactions.visit_id
WHERE transaction_id is null
GROUP BY customer_id;