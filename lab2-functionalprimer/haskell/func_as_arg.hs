--create inpFunc
inpFunc x y = [x..y]

--Define applicatorFunc
applicatorFunc inpFunc x y s
    | s == 's' =  sum (inpFunc x y)
    | otherwise = (sum (inpFunc x y))/(y - x + 1)  

main = do
    let result = applicatorFunc inpFunc 1 10 's' --Call applicatorFunc with inpFunc and 'a' as args
    putStrLn("sum = " ++ show(result))