<template>
    <div class="wpppper">
        <ul>
            <li @click="sad">wqedsad1</li>
            <li>wqedsad2</li>
            <li>wqedsad3</li>
            <li>wqedsad4</li>
            <li>wqedsad5</li>
            <li>wqedsad6</li>
            <li>wqedsad7</li>
            <li>wqedsad8</li>
            <li>wqedsad9</li>
            <li>wqedsad10</li>
            <li>wqedsad11</li>
            <li>wqedsad12</li>
            <li>wqedsad13</li>
            <li>wqedsad14</li>
            <li>wqedsad15</li>
            <li>wqedsad16</li>
            <li>wqedsad17</li>
            <li>wqedsad18</li>
            <li>wqedsad19</li>
            <li>wqedsad20</li>
            <li>wqedsad21</li>
            <li>wqedsad22</li>
            <li>wqedsad23</li>
            <li>wqedsad24</li>
            <li>wqedsad25</li>
            <li>wqedsad26</li>
            <li>wqedsad27</li>
            <li>wqedsad28</li>
            <li>wqedsad29</li>
            <li>wqedsad30</li>
            <li>wqedsad31</li>
            <li>wqedsad32</li>
            <li>wqedsad33</li>
            <li>wqedsad34</li>
            <li>wqedsad35</li>
            <li>wqedsad36</li>
            <li>wqedsad37</li>
            <li>wqedsad38</li>
            <li>wqedsad39</li>
            <li>wqedsad40</li>
            <li>wqedsad41</li>
            <li>wqedsad42</li>
            <li>wqedsad43</li>
            <li>wqedsad44</li>
            <li>wqedsad45</li>
            <li>wqedsad46</li>
            <li>wqedsad47</li>
            <li>wqedsad48</li>
            <li>wqedsad49</li>
            <li>wqedsad50</li>
            <li>wqedsad51</li>
            <li>wqedsad52</li>
            <li>wqedsad53</li>
            <li>wqedsad54</li>
            <li>wqedsad55</li>
            <li>wqedsad56</li>
            <li>wqedsad57</li>
            <li>wqedsad58</li>
            <li>wqedsad59</li>
            <li>wqedsad60</li>
            <li>wqedsad61</li>
            <li>wqedsad62</li>
            <li>wqedsad63</li>
            <li>wqedsad64</li>
            <li>wqedsad65</li>
            <li>wqedsad66</li>
            <li>wqedsad67</li>
            <li>wqedsad68</li>
            <li>wqedsad69</li>
            <li>wqedsad70</li>
            <li>wqedsad71</li>
            <li>wqedsad72</li>
            <li>wqedsad73</li>
            <li>wqedsad74</li>
            <li>wqedsad75</li>
            <li>wqedsad76</li>
            <li>wqedsad77</li>
            <li>wqedsad78</li>
            <li>wqedsad79</li>
            <li>wqedsad80</li>
            <li>wqedsad81</li>
            <li>wqedsad82</li>
            <li>wqedsad83</li>
            <li>wqedsad84</li>
            <li>wqedsad85</li>
            <li>wqedsad86</li>
            <li>wqedsad87</li>
            <li>wqedsad88</li>
            <li>wqedsad89</li>
            <li>wqedsad90</li>
            <li>wqedsad91</li>
            <li>wqedsad92</li>
            <li>wqedsad93</li>
            <li>wqedsad94</li>
            <li>wqedsad95</li>
            <li>wqedsad96</li>
            <li>wqedsad97</li>
            <li>wqedsad98</li>
            <li>wqedsad99</li>
            <li>wqedsad100</li>
        </ul>
    </div>
</template>

<script>
import bs from 'better-scroll'
export default {
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        this.scroll = new bs('.wpppper', {
            click:true,
            probeType: 3,
            pullUpLoad:true
            
        });
        this.scroll.on('scroll', (position) => {
            
        });
        this.scroll.on('pullingUp',()=>{
            console.log('123');
            this.scroll.finishPullUp()
        })
    },
    methods: {
        sad() {
            console.log('qwe');
        }
    }

}
</script>

<style>
.wpppper {
    height: 300px;
    background-color: blue;
    /* overflow-y: scroll; */
    overflow: hidden;
}
</style>