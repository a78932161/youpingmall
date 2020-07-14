<template>
    <div class="suspended">
        <ul>
            <li>
                <a href="https://m.yiupin.com/consumer/shop?kpm=MjAxOA%3D%3D.aHR0cHM6Ly9tLnlpdXBpbi5jb20vY29uc3VtZXIvbWluZQ%3D%3D.5bqV6YOodGFi.6aaW6aG1%40%40Xw%3D%3D&_h5da=true&p_kpm=MjAxOA%3D%3D.aHR0cHM6Ly9tLnlpdXBpbi5jb20vY29uc3VtZXIvc2hvcA%3D%3D.5bqV6YOodGFi.5oiR55qE%40%40Xw%3D%3D&t_kpm=MjAxOA%3D%3D.aHR0cHM6Ly9tLnlpdXBpbi5jb20vY29uc3VtZXIvbWluZQ%3D%3D.5bqV6YOodGFi.6aaW6aG1%40%40Xw%3D%3D&spm=a2v0g.b36259970.0.0&shopId=32b0bdaf4fd04907aafcd99271b646b1%40dist.163.com">
                    <svg-icon icon-class="logo1" class="suspended-icon"/>
                    全球好物
                </a>
            </li>
            <li>
                <a href="https://m.yiupin.com/consumer/mine?kpm=MjAxOA%3D%3D.aHR0cHM6Ly9tLnlpdXBpbi5jb20vY29uc3VtZXIvc2hvcA%3D%3D.5bqV6YOodGFi.5oiR55qE%40%40Xw%3D%3D&_h5da=true&p_kpm=MjAxOA%3D%3D.aHR0cHM6Ly9tLnlpdXBpbi5jb20vY29uc3VtZXIvbWluZQ%3D%3D.5bqV6YOodGFi.6aaW6aG1%40%40Xw%3D%3D&t_kpm=MjAxOA%3D%3D.aHR0cHM6Ly9tLnlpdXBpbi5jb20vY29uc3VtZXIvc2hvcA%3D%3D.5bqV6YOodGFi.5oiR55qE%40%40Xw%3D%3D&spm=a2v0g.b48059358.0.0&shopId=32b0bdaf4fd04907aafcd99271b646b1%40dist.163.com">
                    <svg-icon icon-class="我的" class="suspended-icon"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
    }
</script>

<style lang="scss" scoped>
    .suspended {
        display: flex;
        align-items: center;
        position: fixed;
        left: 10px;
        bottom: 60px;
        z-index: 999;
        width: 121px;
        height: 36px;
        background: #313541;
        border-radius: 10px;
        overflow: hidden;

        .suspended-icon {
            font-size: 20px;
            vertical-align: middle
        }

        ul {
            display: flex;
            margin-left: 10px;

            li {
                padding-right: 6px;
                line-height: 20px;
                font-size: 12px;
                border-right: 1px solid rgba(205, 213, 241, .27);

                a {
                    color: #fff;
                }
            }

            li:last-child {
                margin-left: 4px;
                border: none;
                padding: 0;
            }
        }
    }
</style>