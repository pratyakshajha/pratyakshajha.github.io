## Classification Using XGBoost

In this post we're going to apply XGBoost or eXtreme Gradient Boosting. It is an ensemble algorithm that builds several models sequentially, where each subsequent model has lower error rate. XGBoost employs decision trees in its training, but we can also use gradient boosting with other algorithms like logistic regression. It is one of the most popular implementation that works not only with python but also with R, julia and scala.
Its mechanism can be broken down from its name itself:

- **Boosting**: Each subsequent tree is boosted in performance by correcting error of previous model.
- **Gradient**: It uses gradient descent algorithm to get the next tree with lower error.
- **eXtreme**: It is more regularized and computationally powerful than Gradient Boost

While AdaBoost, GradientBoost and XGBoost fall under same umbrella of boosting techniques, the subtle differences between them gives the variation accuracy score. AdaBoost or adaptive boost is an initial implementation of boosting. It lags behind the rest because of its fixed cost function. Whereas Gradient Boost can use different cost functions, which gives it higher flexibility. It uses gradient descent due to which it converges to the optimal tree quickly. XGBoost is a powerful implementation of gradient boost that gives emphasis on regularization to avoid overfitting and computational tricks to speed up training process.

Begin by loading the dataset. As it is a toy dataset in sklearn, there is no need to download it as it can be directly accessed from `sklearn.datasets`. X is the data which will be the input and target is the class we need to predict.
<script src="https://gist.github.com/pratyakshajha/f3eaa3cd17cf7c87fb2df87f6c28e902.js"></script>

Eyeball the data by loading the first 5 rows of data and target features. `iris['DESCR']` loads description of the dataset. It has four attributes(or input variable) and three output classes. 
<script src="https://gist.github.com/pratyakshajha/1d4c13a02c3299ca638e9a4455a8286a.js"></script>

Before applying anything, we first need to split into training and test sets. In this step, also prepare test and train set for XGBoost, which takes input in `DMatrix` format.
<script src="https://gist.github.com/pratyakshajha/be68dad7ed6e1b99a5cc6da697f56d2d.js"></script>

Set the parameters. Most parametrs here are extensively used in many other algorithms and can be chosen intuitively. Parameters like `max_depth` and `eta`  
are taken randomly with some educated guessing. It can be further tuned by `GridSearchCV` or `RandomizedSearchCV` from sklearn module.
<script src="https://gist.github.com/pratyakshajha/59309994b75fc21448823fef416f1849.js"></script>

With all the prequisites ready, train the classifier. From `predict()`, it outputs probability of all classes. To find the predicted class, find the class with highest probability from this matrix.
<script src="https://gist.github.com/pratyakshajha/4fbd5af83f9880c5e00bf586df275d31.js"></script>

The final step is to evaluate model. Use `accuracy_score` to find the performance of the classifier. Any other metric like precision or recall can be used. More on that in another blog post.
<script src="https://gist.github.com/pratyakshajha/34c572b364b66374d4936f3394371158.js"></script>

An opional step can be to save the model. This saved model can be used to serve as a predictor in some real application like an app or a website. Feel free to go through the [docs](https://xgboost.readthedocs.io/en/latest/python/python_intro.html) for more in depth material.
Through this post, now you can get your own boosted algorithm up and running quickly.